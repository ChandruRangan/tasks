require './config/dbpostgres.rb'
require './defined_methods/methods.rb'

class ProController < Dbconnection
    def initialize
        super
        @conn.prepare('insertpro', 'insert into Project(pro_name, pro_lead,team_member,start_date,end_date) values ($1, $2, $3, $4, $5)')
    end
    def insert(val)
        t= val[2].join("','")
        @conn.exec("insert into Project(pro_name, pro_lead,team_member,start_date,end_date) values('#{val[0]}','#{val[1]}',array ['#{t}'],'#{val[3]}','#{val[4]}')")    
    end
    def listout
       return @conn.exec('select * from Project')
    end
    def delete(id)
        @conn.exec("delete from Project where pro_id=#{id}")
    end
    def get(id)
        return @conn.exec("select * from Project where pro_id=#{id}")
    end
    def get_team(id)
        return @conn.exec("select team_member from Project where pro_id=#{id}")
    end
    def update(val,id)
        t= val[2].join("','")
        @conn.exec("update Project set pro_name='#{val[0]}',pro_lead='#{val[1]}',team_member= array ['#{t}'],start_date='#{val[3]}',end_date='#{val[4]}' where pro_id=#{id}")
    end
    
end
