class Project_delete
    def delete(projectid)
        DB.exec("delete from project where projectid= #{projectid}")
    end
end
