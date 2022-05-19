require "sinatra"
require "rubygems"
require "./controller/delete"
require "./controller/insert"
require "./controller/select"
require "./controller/update"
require "./module/validation"
require "./config/dbconfig"

include Validatable

enable :sessions

set :port=>5000

get "/" do
   erb :login
end

get "/logout" do
   session.clear
   redirect "/"
end

post "/dash" do
   email=params['email']
   password=params['password']
   result=Select.auth(email,password)
   if(email=="" and password="")
      "Email and Pasword is empty"
   elsif(result.ntuples==0)
      "Faild to login.Your Email address or Password is incorrect"
   elsif(email==result[0]['email_address']&&password==result[0]['password'])  
      un=result[0]['full_name']
      role=Select.find_role(un)
      if(role.ntuples==0)
         session[:user]=un
         session[:role]='employee'
      else
         session[:user]=un
         session[:role]='tl'
      end
      erb :"/dashboard/dash", :locals=>{un:un}
   end
end

get "/emp_details" do
   emp_name=session[:user]
   emp=Select.emp_details(emp_name)
   pro=Select.employee_by_projects('team_members',emp_name)
   erb :emp_details, :locals =>{emp:emp,pro:pro}
end


#-----------------------Employee CRUD API-----------------------
get "/emp_view_page" do 
   erb :"employee/emp_view_page", :locals =>{values: Select.employee_select}
end

get "/emp_insert_page" do
   erb :"employee/emp_insert_page" 
end

post "/emp_insert" do
   fullname=params['fname']
   email=params['email']
   password=params['password']
   phno=params['phno'].to_i
   joining_date=params['joining_date']
   dob=params['dob']
   Insert.employee_insert(fullname,email,password,phno,joining_date,dob)
   redirect "/"
end

get "/emp_update_page" do
   id=params['id']
   value= Select.emp_select_by_id(id)
    j_date=value[0]["joining_date"]
    d_date=value[0]["dob"]
  jd=Validatable.date_by_year(j_date)
  dob=Validatable.date_by_year(d_date)
   erb :"employee/emp_update_page", :locals =>{val:Select.emp_select_by_id(id),jd:jd,dob:dob}
end

post "/emp_update_data" do
   id=params['id']
   fullname=params['fname']
   email=params['email']
   password=params['password']
   phno=params['phno'].to_i
   joining_date=params['joining_date']
   dob=params['dob']
   Update.employee_update(id,fullname,email,password,phno,joining_date,dob)
   redirect "/emp_view_page"
end

get "/emp_delete" do
   id=params['id']
   Delete.emp_delete_by_id(id)
   redirect "/emp_view_page"
end

#------------------------End------------------------

#-------------------------Employee CRUD API-------------------------
get "/pro_view_page" do
   erb :"project/pro_view_page", :locals =>{values: Select.project_select}
end

get "/pro_insert_page" do
   erb :"project/pro_insert_page", :locals =>{values: Select.employee_select}
end

post "/pro_insert" do
   project_name=params['project_name']
   project_lead=params['project_lead']
   team_members=params['tm']
   project_s_date=params['project_s_date']
   project_e_date=params['project_e_date']
   Insert.project_insert(project_name,project_lead,team_members,project_s_date,project_e_date)
   redirect "/pro_view_page"
end

get "/pro_update_page" do
   id=params['id']
  val= Select.pro_select_by_id(id)
   s_date=val[0]["project_s_date"]
   e_date=val[0]["project_e_date"]
   tm=val[0]["team_members"]
  sd=Validatable.date_by_year(s_date)
  ed=Validatable.date_by_year(e_date)
  team=tm.tr("{""}","").split(",") 
   erb :"project/pro_update_page", :locals =>{values:Select.pro_select_by_id(id),emp:Select.employee_select,sd:sd,ed:ed,team:team}
end

post "/pro_update_data" do
   id=params['id']
   project_name=params['project_name']
   project_lead=params['project_lead']
   team_members=params['tm']
   project_s_date=params['project_s_date']
   project_e_date=params['project_e_date']
   Update.project_update(id,project_name,project_lead,team_members,project_s_date,project_e_date)
   redirect "/pro_view_page"
end

get "/pro_delete" do
   id=params['id']
   Delete.pro_delete_by_id(id)
   redirect "/pro_view_page"
end
#----------------------End------------------------

#-----------------Search Api-------------------
post "/search" do 
   search_by=params['search_by']
   search_value=params['search_value']

   case search_by
   when 'project_name'
      values=Select.projects_by_employee(search_by,search_value)
      if(values.ntuples!=0)
         erb :"employee/emp_view_page", :locals =>{values: values}
      else
         "<script>alert('No recordes for #{search_value}');</script>"   
      end
   when 'project_lead'
      values=Select.projects_by_project_lead(search_by,search_value)
      if(values.ntuples!=0)
         erb :"project/pro_view_page", :locals =>{values: values}
      else
         "<script>alert('No recordes for #{search_value}');</script>"   
      end
   when 'team_members'
      values=Select.employee_by_projects(search_by,search_value)
      if(values.ntuples!=0)
         erb :"project/pro_view_page", :locals =>{values: values}
      else
         "<script>alert('No recordes for #{search_value}');</script>"   
      end
   when 'project_lead_1'
      values=Select.employee_by_project_lead('project_lead',search_value)
      if(values.ntuples!=0)
         erb :"employee/emp_view_page", :locals =>{values: values}  
      else
         "<script>alert('No recordes for #{search_value}');</script>"   
      end
   else
      "<script>alert('Please select the search');</script>" 
   end   
end
#------------------------End-----------------------------