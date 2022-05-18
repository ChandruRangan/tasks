require './config/db'

class Employee
    def self.emp_insert(full_name,email,password,phone_number,join_date,date_of_birth)
        $rich.exec_params("insert into employees(full_name,email,password,phone_number,join_date,date_of_birth) values ('#{full_name}','#{email}','#{password}','#{phone_number}','#{join_date}','#{date_of_birth}')")
    end
    def self.emp_view
        a = $rich.exec('select employee_id,full_name,email,phone_number,join_date,date_of_birth from employees')
    end

    def self.emp_update_page(id)
        b = $rich.exec("select employee_id,full_name,email,phone_number,join_date,date_of_birth from employees where employee_id = #{id}")
    end
    def self.emp_update(id,full_name,email,phone_number,join_date,date_of_birth)
        $rich.exec("update employees set full_name= '#{full_name}',email= '#{email}',phone_number= '#{phone_number}',join_date= '#{join_date}',date_of_birth= '#{date_of_birth}' where employee_id= #{id}")
    end
    def self.emp_delete(id)
        $rich.exec("delete from employees where employee_id= #{id}")
    end
    def self.pro_search(full_name)
        $rich.exec("select project.project_name,project.project_lead,project.team_members,project.project_sdate,project.project_edate from employees inner join project on employees.full_name = any(project.team_members) where employees.full_name like '%#{full_name}' or employees.full_name like '%#{full_name}%' or employees.full_name like '#{full_name}%'") 
    end
end