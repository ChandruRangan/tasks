class Project_update
    def update(projectid,projectname,projectlead,team_members,project_start_date,project_death_date)
        array=team_members.join(",")
        DB.exec("update project set projectname='#{projectname}',projectlead='#{projectlead}',teammembers='{#{array}}',project_start_date='#{project_start_date}', project_death_date='#{project_death_date}' where projectid=#{projectid}")
    end 
end