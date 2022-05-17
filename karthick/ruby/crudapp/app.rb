require "sinatra"
require "rubygems"
require "./controller/delete"
require "./controller/insert"
require "./controller/select"
require "./controller/update"
require "./module/validation"

include Validatable

set :port=>5000

get "/" do 
   erb :home_page, :locals =>{values: Select.employee_select}
end

get "/emp_insert_page" do
   erb :emp_insert_page 
end

get "/pro_insert_page" do
   erb :pro_insert_page, :locals =>{values: Select.employee_select}
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

post "/pro_insert" do
   project_name=params['project_name']
   project_lead=params['project_lead']
   team_members=params['tm']
   project_s_date=params['project_s_date']
   project_e_date=params['project_e_date']
   Insert.project_insert(project_name,project_lead,team_members,project_s_date,project_e_date)
   redirect "/pro_view_page"
end

get "/emp_update_page" do
   id=params['id']
   value= Select.emp_select_by_id(id)
   value.each do |v|
    $j_date=v["joining_date"]
    $d_date=v["dob"]
  end
  jd=Validatable.date_by_year($j_date)
  dob=Validatable.date_by_year($d_date)
   erb :emp_update_page, :locals =>{val:Select.emp_select_by_id(id),jd:jd,dob:dob}
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
   redirect "/"
end

get "/emp_delete" do
   id=params['id']
   Delete.emp_delete_by_id(id)
   redirect "/"
end

get "/pro_delete" do
   id=params['id']
   Delete.pro_delete_by_id(id)
   redirect "/pro_view_page"
end

get "/pro_view_page" do
   erb :pro_view_page, :locals =>{values: Select.project_select}
end


get "/pro_update_page" do
   id=params['id']
  val= Select.pro_select_by_id(id)
  val.each do |v|
   $s_date=v["project_s_date"]
   $e_date=v["project_e_date"]
   $tm=v["team_members"]
  end
  sd=Validatable.date_by_year($s_date)
  ed=Validatable.date_by_year($e_date)
  team=$tm.tr("{""}","").split(",") 
   erb :pro_update_page, :locals =>{values:Select.pro_select_by_id(id),emp:Select.employee_select,sd:sd,ed:ed,team:team}
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