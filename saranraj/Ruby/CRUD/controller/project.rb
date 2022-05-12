require './config/dbpostgres.rb'
require './defined_methods/methods.rb'

class ProController < Dbconnection
    def initialize
        super
        @conn.prepare('insertpro', 'insert into Project(pro_name, pro_lead,team_member,start_date,end_date) values ($1, $2, $3, $4, $5)')
    end
    def insert(val)
        p val[2]
        # @conn.exec_prepared('insertpro',val)
        @conn.exec("insert into Project(pro_name, pro_lead,team_member,start_date,end_date) values('#{val[0]}','#{val[1]}',array #{val[2]},#{val[3]},#{val[4]})")
        
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
