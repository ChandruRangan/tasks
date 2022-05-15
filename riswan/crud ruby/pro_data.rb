require './config/database.rb'


class Project_data
    def self.prodata
        ris=DB.exec("select fullname from employee")
    end
end
Project_data.prodata