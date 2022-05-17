require 'pg'
# require 'rubygems'


class Dbconnection
    attr_accessor :conn 
    def initialize
        begin
            # con = PG.connect :dbname => 'company', :user => 'saran',:password =>'Saran@123',:host => 'localhost'
            @conn = PG.connect(dbname: 'company', user: 'saran', password: 'Saran@123',host:'localhost')
          
            p 'connected to Database'

        rescue PG::Error => e
            p e
        end
    end
    
end

# emp =Dbconnection.new

# @conn.prepare('s1', 'insert into Employee(fname, email,password,phoneno,joining_date,date_of_birth) values ($1, $2, $3, $4, $5, $6)')
# @conn.exec_prepared('s1', ['richar','rich@gmail.com','richu',965465565,'2022-06-06','2022-06-06' ])
