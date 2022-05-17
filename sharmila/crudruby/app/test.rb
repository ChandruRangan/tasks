require 'sinatra'
require './db/data.rb'
#require '../app/control.rb'

get '/' do
        erb :display
end
=begin
class Createtable 
        def index
              if request.post
                @user_new=Createtable.new(params[:user_new])
                tags - @user_new.tags.split(",")
                @user_new = Createtable.new(params[:user_new])
                query = "INSERT INTO employee (full_name,email_address,password,phone_no,joining_date,dob) VALUES  (#{@user_new.fullname},#{@user_new.email_address},#{@user_new.password},#{@user_new.phoneno},#{@user_new.date_joinng},#{@user_name.dob},#{tags[0]})"
                Createtable.connection.execute(query); 
              end
        end
end
=end

post'/display' do
        full_name = params['full_name']
        email_address = params['email_address']
        password = params['password']
        phone_no= params['phone_no'].to_i
        joining_date= params['joining_date']
        dob=params['dob']
       # DB.exec("INSERT INTO employee(full_name,email_address,password,phone_no,joining_date,dob) VALUES('#{full_name}','#{email_address}','#{password}','#{phone_no}','#{joining_date}','#{dob}')")
        redirect "/"
end
=begin
#class Createtable 
    
        get '/' do
                erb :'display'
        end
         
        post '/display' do
                authorize
                u=emp_tab
                u.display.bulid(full_name:params[:full_name], email_address: params[:email_address], password: params[:password])
                redirect '/display'
        end
=end      
=begin  
post '/dispaly' do
        Employee.insert(full_name,email_address,password,phone_no,joining_date,dob)
        erb :display
end
=end