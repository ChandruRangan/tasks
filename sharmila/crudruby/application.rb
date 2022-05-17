require 'sinatra'
require './db/database.rb'

get "/" do
    erb :insert
end

get '/view' do
        s= DB.exec("select * from employee")
        erb :view, :locals=>{values:s}
end
post'/insert' do
    full_name = params['full_name']
    email_address = params['email_address']
    password = params['password']
    phone_no= params['phone_no'].to_i
    joining_date= params['joining_date']
    dob=params['dob']
    DB.exec("INSERT INTO employee(full_name,email_address,password,phone_no,joining_date,dob) VALUES('#{full_name}','#{email_address}','#{password}','#{phone_no}','#{joining_date}','#{dob}')")
    redirect "/"
end

get '/update' do

    data=DB.exec("select * from employee")
    erb :updateemp, :locals=>{s:data}
end

post'/updateemp' do
    full_name = params['full_name']
    email_address = params['email_address']
    password = params['password']
    phone_no= params['phone_no'].to_i
    joining_date= params['joining_date']
    dob=params['dob']
    emp_id=params['id']
    DB.exec("UPDATE employee SET full_name='#{full_name}',email_address='#{email_address}',password='#{password}',phone_no='#{phone_no}',joining_date='#{joining_date}',dob='#{dob}' where emp_id='#{emp_id}'")
    redirect "/proview"
end
 
 
get'/delete' do
    emp_id= params['id']
    DB.exec("DELETE FROM employee where emp_id='#{emp_id}'")   
    redirect "/view" 
end
get'/pro_insert' do 
    i=DB.exec("select * from employee")
    erb :pro_insert, :locals=>{values:i}
end

get '/proview' do
    i=DB.exec("select * from project")
    erb :proview, :locals=>{value:i}
end

post'/pro_insert' do
    pro_name = params['pro_name']
    pro_lead= params['pro_lead']
    team_members = params['team_members']
    start_date= params['start_date']
    end_date = params['end_date']
    DB.exec("INSERT INTO project(pro_name,pro_lead,team_members,start_date,end_date) VALUES('#{pro_name}','#{pro_lead}','#{team_members}','#{start_date}','#{end_date}')")
    redirect "/pro_insert"
end
 
get '/pro_update' do
    datas=DB.exec("select * from project")
    erb :pro_update, :locals=>{pro:datas}
end
post '/pro_update' do
    pro_name = params['pro_name']
    pro_lead = params['pro-lead']
    team_members = params['team_meambers']
    start_date = params['start_date']
    end_date = params['end_date']
    pro_id = params['id']
    DB.exec("UPDATE project SET pro_name='#{pro_name}',pro_lead='#{pro_lead}',team_members='#{team_members}',start_date='#{start_date}',end_date='#{end_date}' where pro_id='#{pro_id}'")
    redirect '/proview'
end

get'/pro_delete' do
    pro_id= params['id']
    DB.exec("DELETE FROM project where pro_id='#{pro_id}'")   
    redirect "/proview" 
end
