require "./config/dbconfig"

class Delete
    def self.emp_delete_by_id(id)
        values=DB::DBCON.exec("delete from employee where emp_id=#{id}")
    end
    def self.pro_delete_by_id(id)
        values=DB::DBCON.exec("delete from project where pro_id=#{id}")
    end
end

