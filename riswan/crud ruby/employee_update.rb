

class Employee_update
    def update(emp_id,fullname,email,password,phoneno,joindate,dob)
        DB.exec("update employee set fullname='#{fullname}',email='#{email}',password='#{password}',phoneno='#{phoneno}', joiningdate='#{joindate}',dob='#{dob}' where emp_id=#{emp_id}")
    end
end