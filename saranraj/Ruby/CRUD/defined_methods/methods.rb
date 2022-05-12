module METHODS
    def array_push_emp(param)
        a=Array.new
        a.push(param["fname"])
        a.push(param["email"])
        a.push(param["password"])
        a.push(param["phoneno"])
        a.push(param["joining_date"])
        a.push(param["date_of_birth"])
        return a

    end
    def array_push_pro(param)
        a=Array.new
        a.push(param["project_name"])
        a.push(param["project_lead"])
        a.push(param["team_member"])
        a.push(param["sdate"])
        a.push(param["edate"])
        return a 
    end
    
end