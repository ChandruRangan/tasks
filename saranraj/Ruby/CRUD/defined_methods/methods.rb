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
    
end