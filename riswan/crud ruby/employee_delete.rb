class Employee_delete
    def delete(emp_id)
        DB.exec("delete from employee where emp_id=#{emp_id}")
    end
end