require "./config/dbconfig"
require "./module/validation"


class Update
    include Validatable
    def self.employee_update(id,fullname,email,password,phno,joining_date,dob)
        j_date=Validatable.date_by_month(joining_date)
        dob_date=Validatable.date_by_month(dob)
        DB::DBCON.exec('update employee set full_name=$2,email_address=$3,password=$4,phone_no=$5,joining_date=$6,dob=$7 where emp_id=$1',[id,fullname,email,password,phno,j_date,dob_date])
    end
    def self.project_update(id,project_name,project_lead,team_members,project_s_date,project_e_date)
        s_date=Validatable.date_by_month(project_s_date)
        e_date=Validatable.date_by_month(project_e_date)
        kar=team_members.join(",")
        DB::DBCON.exec("update project set project_name='#{project_name}',project_lead='#{project_lead}',team_members='{#{kar}}',project_s_date='#{s_date}',project_e_date='#{e_date}' where pro_id='#{id}'")
    end
end