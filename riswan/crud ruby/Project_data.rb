require './config/database.rb'

class Proj_data
    def self.viewdata
        ris=DB.exec("select * from project")
    end 
end
Proj_data.viewdata