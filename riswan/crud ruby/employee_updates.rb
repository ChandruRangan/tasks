
class Update
    def self.up(emp_id)
       DB.exec("select * from employee where emp_id=#{emp_id}")
    end
end
