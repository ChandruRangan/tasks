require 'sinatra'
require './config/database.rb'

class Update
    def self.up(emp_id)
       ris=DB.exec("select * from employee where emp_id=#{emp_id}")
    end
end


