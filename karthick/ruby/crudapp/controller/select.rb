require "./config/dbconfig"

class Select
    def self.employee_select
        values=DB::DBCON.exec("select * from employee")
    end
    def self.emp_select_by_id(id)
        values=DB::DBCON.exec("select * from employee where emp_id=#{id}")
    end
    def self.project_select
        values=DB::DBCON.exec("select * from project")
    end
    def self.pro_select_by_id(id)
        values=DB::DBCON.exec("select * from project where pro_id=#{id}")
    end
end

