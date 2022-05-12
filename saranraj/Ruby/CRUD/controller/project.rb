require './config/dbpostgres.rb'
require './defined_methods/methods.rb'

class ProController < Dbconnection
    def initialize
        super
        @conn.prepare('insertpro', 'insert into Employee(pro_name, pro_lead,,start_date,end_date) values ($1, $2, $3, $4, $5, $6)')
    end
    def insert()
    end
    def listout
    end
    def deletepro()
    end
    def getpro
        return
    end
    def updatepro
    end
    
end
