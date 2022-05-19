class Prolead_by_emp
    def self.search(search)
        DB.exec("select employee.fullname,employee.email,employee.phoneno,employee.joiningdate,employee.dob from employee inner join project on employee.fullname = ANY(project.teammembers) where project.projectlead='#{search}'")
    end
end