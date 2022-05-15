require 'sinatra'
require './config/database.rb'
require './employee_data.rb'
require './employee_updates.rb'
require './pro_data.rb'
require './Project_data.rb'
require './project_updates.rb'

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
    joindate=params['joiningdate']
    dob=params['dob']
    DB.exec("INSERT INTO employee (fullname,email,password,phoneno,joiningdate,dob) VALUES('#{fullname}', '#{email}', '#{password}', '#{phoneno}', '#{joindate}', '#{dob}')")
    redirect "/"
end



post '/pro_insert' do 
    project_name=params['projectname']
    project_lead=params['projectlead']
    team_members=params['teammembers']
    pro_start_date=params['projectstartdate']
    pro_end_date=params['projectdeathdate']
    ris=team_members.join(",")
    DB.exec("INSERT INTO project (projectname,projectlead,teammembers,project_start_date,project_death_date) VALUES('#{project_name}', '#{project_lead}','{#{ris}}','#{pro_start_date}', '#{pro_end_date}')")
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
    DB.exec("update employee set fullname='#{fullname}',email='#{email}',password='#{password}',phoneno='#{phoneno}', joiningdate='#{joindate}',dob='#{dob}' where emp_id=#{emp_id}")
    redirect "/view"
end 

get '/delete' do
    emp_id=params['id']
    DB.exec("delete from employee where emp_id=#{emp_id}")
    redirect "/view"
end


get '/pro_update' do
    projectid=params['id']
    erb :pro_update, :locals=>{pupdate:Projectupdate.proup(projectid)}
end

post '/pro_updatenext' do
    projectid=params['projectid']
    projectname=params['projectname']
    projectlead=params['projectlead']
    teammembers=params['teammembers']
    project start date=params['project start date']
    project death date=params['project death date']
    DB.exec("update project set projectname='#{projectname}',projectlead='#{projectlead}',teammembers='#{teammembers}',project start date='#{project start date}', project death date='#{project death date}' where projectid=#{projectid}")
    redirect "/viewprodata"
end 

get '/prodelete' do
    projectid=params['id']
    DB.exec("delete from project where projectid= #{projectid}")
    redirect "/viewprodata"
end