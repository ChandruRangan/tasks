

class Proj_data
    def self.viewdata
        DB.exec("select * from project")
    end 
end
