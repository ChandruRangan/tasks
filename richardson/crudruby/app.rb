require 'sinatra'
require './config/db.rb'
require 'date'
require './controller/employee'
require './controller/project'

get "/" do
    erb :home
end
post "/insert" do
  full_name=params['full_name']
  email=params['email']
  password=params['password']    
  phone_number=params['phone_number'].to_i
  join_date=params['join_date']
  date_of_birth=params['date_of_birth']
  joindate=Date.parse(join_date).strftime('%m-%d-%Y')
  dob=Date.parse(date_of_birth).strftime('%m-%d-%Y')
  #$rich.exec_params("insert into employees(full_name,email,password,phone_number,join_date,date_of_birth) values ('#{full_name}','#{email}','#{password}','#{phone_number}','#{g}','#{t}')")
  Employee.emp_insert(full_name,email,password,phone_number,joindate,dob)
   
redirect "/"
end
get "/view" do 
=begin 
    a = $rich.exec('select employee_id,full_name,email,phone_number,join_date,date_of_birth from employees')
    
    a.each do |v|
          [v['employee_id'],v['full_name'],v['email'],v['phone_number'],v['join_date'],v['date_of_birth']]
    end 
=end
    
    erb :view, :locals=>{emp:Employee.emp_view}
end
get "/update" do
    id = params['id']
    #b = $rich.exec("select employee_id,full_name,email,phone_number,join_date,date_of_birth from employees where employee_id = #{id}")
    
    emp1=Employee.emp_update_page(id)
    
    erb :update, :locals=>{up:emp1} 
end

post "/updatedata" do
    id = params['id']
    full_name=params['full_name']
    email=params['email']    
    phone_number=params['phone_number'].to_i
    join_date=params['join_date']
    date_of_birth=params['date_of_birth']
    joindate=Date.parse(join_date).strftime('%m-%d-%Y')
    dob=Date.parse(date_of_birth).strftime('%m-%d-%Y')

    #$rich.exec("update employees set full_name= '#{full_name}',email= '#{email}',phone_number= '#{phone_number}',join_date= '#{join_date}',date_of_birth= '#{date_of_birth}' where employee_id= #{id}")
    Employee.emp_update(id,full_name,email,phone_number,joindate,dob)
    
redirect "/view"
end

get "/delete" do
    id = params['id']
    #$rich.exec("delete from employees where employee_id= #{id}")
    Employee.emp_delete(id)  
    redirect "/view"
end

get "/project" do
    #pr=$rich.exec("select full_name from employees")
    erb:team, :locals=>{pro:Project.emp_select}      
end

post "/project_insert" do
    project_name = params['project_name']
    project_lead = params['project_lead']
    team_members = params['team_members'].join(",")
    project_sdate = params['project_sdate']
    project_edate = params['project_edate']
     #$rich.exec("insert into project (project_name,project_lead,team_members,project_sdate,project_edate) values ('#{project_name}','#{project_lead}','{#{team_members}}','#{project_sdate}','#{project_edate}')")
    Project.pro_insert(project_name,project_lead,team_members,project_sdate,project_edate) 
    redirect "/project"
end 

get "/project_view" do
    #q = $rich.exec('select project_id,project_name,project_lead,team_members,project_sdate,project_edate from project')
    erb :project_view,  :locals=>{project:Project.pro_view}
end

get "/project_delete" do
    id = params['id']
    #$rich.exec("delete from project where project_id= #{id}")
    Project.pro_delete(id)
    redirect "/project_view"
end

get "/project_update" do
    id = params['id']
    #up = $rich.exec("select * from project where project_id = #{id}")
    #p = $rich.exec("select full_name from employees")
    page=Project.pro_update_page(id)
    erb:project_update, :locals=>{project_up:page,pro:Project.emp_select}   
end
post "/project_updatedata" do
    id = params['id']
    project_name = params['project_name']
    project_lead = params['project_lead']
    team_members = params['team_members'].join(",")
    project_sdate = params['project_sdate']
    project_edate = params['project_edate']
    Project.pro_update(id,project_name,project_lead,team_members,project_sdate,project_edate)
    redirect"/project_view"
end

post "/emp_search" do
    project_name = params['project_name']
    
    erb :view, :locals=>{emp:Project.emp_search_name(project_name)}
end

post "/pro_search" do
    full_name = params['full_name']

    erb :project_view, :locals=>{project:Employee.pro_search(full_name)}
end

post "/tl_search" do 
    project_lead = params['project_lead']

    erb :project_view, :locals=>{project:Project.tl_search(project_lead)}
end

post "/tl_emp_search" do
    project_lead = params['project_lead']
    erb :view, :locals=>{emp:Project.tl_emp_search(project_lead)}
end
  
