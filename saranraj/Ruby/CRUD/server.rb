require 'sinatra'
require 'json'
require './controller/employee.rb'
require './controller/project.rb'
load './defined_methods/methods.rb'
include METHODS
employee=Empcontroller.new
project=ProController.new

get '/' do
  erb :insert
end

post '/empinsert' do
 
  employee.insert(array_push_emp(params))
  redirect '/'
    
end

get '/viewemp' do

   erb :empview, locals:{emp:employee.listout} 
   
end

delete '/empdelete' do
     employee.deleteemp(params[:id])
     redirect '/viewemp'
end
get '/empupdate' do
   erb :empupdate, locals:{emp:employee.getemp(params[:id])}
end
post '/empupdate' do
    a =array_push_emp(params)
    employee.updateemp(a,params[:emp_id])
    redirect '/viewemp'
end
get '/proinsert' do
  erb :'proinsert.html', locals:{emp:employee.listout}
end
post '/proinsert' do
  p params["team_member"]
   a=array_push_pro(params)
   project.insert(a)
end

