class Project_update
    def update(projectid,projectname,projectlead,teammembers,project_start_date,project_death_date)
        DB.exec("update project set projectname='#{projectname}',projectlead='#{projectlead}',teammembers='#{teammembers}',project_start_date='#{project_start_date}', project_death_date='#{project_death_date}' where projectid=#{projectid}")
    end 
end