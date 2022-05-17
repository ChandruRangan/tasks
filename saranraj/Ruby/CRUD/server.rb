require 'sinatra'
require './controller/employee.rb'
require './controller/project.rb'
require './controller/search.rb'

load './defined_methods/methods.rb'
include METHODS
employee=Empcontroller.new
project=ProController.new
search=Search.new

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
  employee.delete(params[:id])
  redirect '/viewemp'
end

get '/empupdate' do
   erb :empupdate, locals:{emp:employee.get(params[:id])}
end

post '/empupdate' do
  employee.update(array_push_emp(params),params[:emp_id])
  redirect '/viewemp'
end

get '/proinsert' do
  erb :'proinsert.html', locals:{emp:employee.listout}
end

post '/proinsert' do
  project.insert(array_push_pro(params))
  redirect '/proinsert'
end

get '/viewpro' do
  erb :proview, locals:{pro:project.listout}
end

delete '/prodelete' do
  project.delete(params[:id])
  redirect '/viewpro'
end

get '/proupdate' do
    erb :proupdate, locals:{pro:project.get(params[:id]),emp:employee.listout}
end

post '/proupdate' do
  project.update(array_push_pro(params),params["pro_id"])
  redirect '/viewpro'
end

get '/probyprolead' do
  erb :proview, locals:{pro:search.pro_by_prolead(params["prolead"])}
end

get '/empbyprolead' do
  erb :empview, locals:{emp:search.emp_by_prolead(params["prolead"])} 
end

get '/empbypro' do
  erb :empview, locals:{emp:search.emp_by_pro(params["project"])} 
end

get '/probyemp' do
  erb :proview, locals:{pro:search.pro_by_employee(params["emp"])}
end

get '/search' do 
  if(params["searchtype"]=="project by lead")
    redirect "/probyprolead?prolead=#{params["search"]}"
  end
  if (params["searchtype"]=="employee by project")
    redirect "/empbypro?project=#{params["search"]}"
  end
  if(params["searchtype"]=="project by employee")
    redirect "/probyemp?emp=#{params["search"]}"
  end
   
  if(params["searchtype"]=="employee by project lead")
    redirect "/empbyprolead?prolead=#{params["search"]}"
  end
 
end





get '/error' do
  halt(404,haml(:error, :locals => {:error_message => request.env['sinatra.error'].to_s}))
end