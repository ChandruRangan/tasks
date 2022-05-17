module Workable
 def create_info
   @info={"Name":@fullname,
      "Age":@age,
      "Salary":@salary,
      "Company":"Agira",
      "Role":@role,
      "Working_hours":8,
      "Team":@team,
      "Tax for your salary":show_tax}
 end
 def show(hash_name)
    hash_name.each do |k,v|
     puts "#{k}:#{v}"
    end
    puts "\n"
 end
end