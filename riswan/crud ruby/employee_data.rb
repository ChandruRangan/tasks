
require 'sinatra'
require './config/database.rb'

class Empdata
    def self.datas
       res=DB.exec('select * from employee')
    end
end

Empdata.datas