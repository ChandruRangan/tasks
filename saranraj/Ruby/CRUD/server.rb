require 'sinatra'
require 'json'
require './controller/employee.rb'
require './controller/project.rb'
require './defined_methods/methods.rb'
require 'rack'
include METHODS
employee=Empcontroller.new
# rack=Rack::request
#  rack= Rack::request.new
# req = Rack::Request

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
  # p request.form_vars
  # p rack
  # p params.methods
  p Sinatra::ExtendedRack.new
end
# post '/proinsert' do
#   push = JSON.parse(request.body.read)
#   puts "I got some JSON: #{push.inspect}"
# end
p Sinatra.constants.select {|c| Sinatra.const_get(c).is_a? Class}
p Sinatra::ExtendedRack.instance_methods

