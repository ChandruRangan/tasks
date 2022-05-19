class Project
    def self.fullnam
        DB.exec("select fullname from employee")
    end
end
