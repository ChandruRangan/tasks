

class Employee_ins
    def insert(fullname,email,password,phoneno,joiningdate,dob)
        DB.exec("INSERT INTO employee (fullname,email,password,phoneno,joiningdate,dob) VALUES('#{fullname}', '#{email}', '#{password}', '#{phoneno}', '#{joiningdate}', '#{dob}')")
    end
end
