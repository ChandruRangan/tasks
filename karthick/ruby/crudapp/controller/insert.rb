require "./config/dbconfig"
require "./module/validation"

class Insert
 include Validatable
    def self.employee_insert(fullname,email,password,phno,joining_date,dob)
      j_date=Validatable.date_by_month(joining_date)
      dob_date=Validatable.date_by_month(dob)
      DB::DBCON.exec('insert into employee (full_name,email_address,password,phone_no,joining_date,dob) values ($1,$2,$3,$4,$5,$6)',[fullname,email,password,phno,j_date,dob_date])
    end

    def self.project_insert(project_name,project_lead,team_members,project_s_date,project_e_date)
      s_date=Validatable.date_by_month(project_s_date)
      e_date=Validatable.date_by_month(project_e_date)
      kar=team_members.join(",")
      DB::DBCON.exec("insert into project (project_name,project_lead,team_members,project_s_date,project_e_date) values ('#{project_name}','#{project_lead}','{#{kar}}','#{s_date}','#{e_date}')")
    end
end