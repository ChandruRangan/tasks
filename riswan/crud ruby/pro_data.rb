

class Project_data
    def self.prodata
        DB.exec("select fullname from employee")
    end
end
