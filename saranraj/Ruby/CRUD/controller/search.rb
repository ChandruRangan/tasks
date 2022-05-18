require './config/dbpostgres.rb'
require './defined_methods/methods.rb'
# require '../config/dbpostgres.rb'

class Search < Dbconnection
    def initialize
        super
    end

    def emp_by_pro(pro)
      k=@conn.exec("select team_member from project where pro_name = '#{pro}'")
    return  @conn.exec("select * from employee  where fname = any ('{#{ hash_to_arr(k).join("").tr('{}',"")}}')")
    end

    def pro_by_prolead(prolead)
        return @conn.exec("select * from project where pro_lead='#{prolead}'")
    end
    
    def emp_by_prolead(prolead)
        k=@conn.exec("select team_member from project where pro_lead = '#{prolead}'")
        return  @conn.exec("select * from employee  where fname = any ('{#{ hash_to_arr(k).join("").tr('{}',"")}}')")
    end
    
    def pro_by_employee(emp)
      return  @conn.exec("select * from project where '#{emp}' = any(team_member)")
    end
 
end

# k=Search.new.pro_by_prolead('richar')jgrkrlgsfvlmfv
# k.each do |i|
#     p i
# end