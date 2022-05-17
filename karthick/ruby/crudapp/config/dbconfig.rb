require "pg"

class DB
 begin
    DBCON=PG.connect(dbname:"it",user:"karthick",password:"ruthra007")
    puts "connection Sucessfull"
 rescue PG::error=>e
    puts e.message
   end
end
