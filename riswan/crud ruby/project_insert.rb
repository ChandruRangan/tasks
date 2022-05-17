

class Project_ins
    def insert(project_name,project_lead,team_members,pro_start_date,pro_end_date)
        array=team_members.join(",")
        DB.exec("INSERT INTO project (projectname,projectlead,teammembers,project_start_date,project_death_date) VALUES('#{project_name}', '#{project_lead}','{#{array}}','#{pro_start_date}', '#{pro_end_date}')")
    end 
end