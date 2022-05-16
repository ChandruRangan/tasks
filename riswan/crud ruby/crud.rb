require 'sinatra'
require './config/database.rb'
require './employee_insert.rb'
require './employee_update.rb'
require './employee_updates.rb'
require './employee_data.rb'
require './employee_delete.rb'
require './project_insert.rb'
require './project_update.rb'
require './project_updates.rb'
require './pro_data.rb'
require './Project_data.rb'
require './project_delete.rb'

get '/' do
    erb :crudemp
end

get '/project' do
    erb :crudpro, :locals=>{pro:Project_data.prodata}
end

get '/view' do
    erb :employee_table, :locals=>{data:Empdata.datas}
end

get '/viewprodata' do
    erb :projectview, :locals=>{projdata:Proj_data.viewdata}
end

post '/emp_insert' do
    fullname=params['fullname']
    email=params['email']
    password=params['password']
    phoneno=params['phoneno'].to_i
    joiningdate=params['joiningdate']
    dob=params['dob']
    em_in=Employee_ins.new()
    em_in.insert(fullname,email,password,phoneno,joiningdate,dob)
    redirect "/"
end


post '/pro_insert' do 
    project_name=params['projectname']
    project_lead=params['projectlead']
    team_members=params['teammembers']
    pro_start_date=params['projectstartdate']
    pro_end_date=params['projectdeathdate']
    pro_in=Project_ins.new()
    pro_in.insert(project_name,project_lead,team_members,pro_start_date,pro_end_date)
    redirect "/project"
end


get '/emp_update' do
    emp_id=params['id']
    erb :employee_update, :locals=>{valdata:Update.up(emp_id)}
    
end

post '/emp_updatenext' do
    emp_id=params['emp_id']
    fullname=params['fullname']
    email=params['email']
    password=params['password']
    phoneno=params['phoneno'].to_i
    joindate=params['joiningdate']
    dob=params['dob']
    em_up=Employee_update.new()
    em_up.update(emp_id,fullname,email,password,phoneno,joindate,dob)
    redirect "/view"
end 

get '/delete' do
    emp_id=params['id']
    em_del=Employee_delete.new()
    em_del.delete(emp_id)
    redirect "/view"
end


get '/pro_update' do
    projectid=params['id']
    erb :project_update, :locals=>{pupdate:Projectupdate.proup(projectid)}
end

post '/pro_updatenext' do
    projectid=params['projectid']
    projectname=params['projectname']
    projectlead=params['projectlead']
    teammembers=params['teammembers']
    project_start_date=params['project_start_date']
    project_death_date=params['project_death_date']
    pro_up=Project_update.new()
    pro_up.update(projectid,projectname,projectlead,teammembers,project_start_date,project_death_date)
    redirect "/viewprodata"
end 

get '/prodelete' do
    projectid=params['id']
    pro_del=Project_delete.new()
    pro_del.delete(projectid)
    redirect "/viewprodata"
end

