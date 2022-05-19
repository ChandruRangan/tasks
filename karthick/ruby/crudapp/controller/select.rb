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
    def self.employee_by_project_lead(search_by,search_value)
        values=DB::DBCON.exec("select * from employee as e inner join project as p on e.full_name=any(p.team_members) where p.#{search_by} like '%#{search_value}%'")
    end
    def self.employee_by_projects(search_by,search_value)
        values=DB::DBCON.exec("select * from project where array_to_string(#{search_by},'') like '%#{search_value}%'")
    end
    def self.projects_by_project_lead(search_by,search_value)
        values=DB::DBCON.exec("select * from project where #{search_by} like '%#{search_value}%'")
    end
    def self.projects_by_employee(search_by,search_value) 
        values=DB::DBCON.exec("select * from employee as e inner join project as p on e.full_name=any(p.team_members) where p.#{search_by} like '%#{search_value}%'")
    end 
    def self.auth(email,password)
        values=DB::DBCON.exec("select * from employee where email_address='#{email}' and password='#{password}'")
    end
end

