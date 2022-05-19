class Emp_pro_search
    def self.search(search)
        DB.exec("select employee.fullname,employee.email,employee.phoneno,employee.joiningdate,employee.dob from employee inner join project on employee.fullname = ANY(project.teammembers) where project.projectname='#{search}'")
    end
end
