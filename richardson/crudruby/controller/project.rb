require './config/db'

class Project
    def self.pro_insert(project_name,project_lead,team_members,project_sdate,project_edate)
        $rich.exec("insert into project (project_name,project_lead,team_members,project_sdate,project_edate) values ('#{project_name}','#{project_lead}','{#{team_members}}','#{project_sdate}','#{project_edate}')")
    end
    def self.pro_view
        $rich.exec('select project_id,project_name,project_lead,team_members,project_sdate,project_edate from project')
    end
    def self.pro_update_page(id)
        $rich.exec("select * from project where project_id = #{id}")

    end
    def self.emp_select
        $rich.exec("select full_name from employees")
    end
    def self.pro_update(id,project_name,project_lead,team_members,project_sdate,project_edate)
        p team_members
        $rich.exec("update project set project_name= '#{project_name}',project_lead= '#{project_lead}',team_members='{#{team_members}}',project_sdate= '#{project_sdate}',project_edate= '#{project_edate}' where project_id= #{id}")
    end
    def self.pro_delete(id)
        $rich.exec("delete from project where project_id= #{id}")
    end
    def self.emp_search_name(project_name)
        $rich.exec("select employees.employee_id, employees.full_name, employees.email, employees.phone_number, employees.join_date, employees.date_of_birth from employees inner join project on employees.full_name = any(project.team_members) where project.project_name= '#{project_name}'")  
    end
    def self.tl_search(project_lead)
        $rich.exec("select * from project where project_lead = '#{project_lead}'")
    end
    def self.tl_emp_search(project_lead)
        $rich.exec(" select employees.employee_id, employees.full_name, employees.email, employees.phone_number, employees.join_date, employees.date_of_birth from employees inner join project on employees.full_name = any(project.team_members) where project.project_lead= '#{project_lead}'")
    end

end

