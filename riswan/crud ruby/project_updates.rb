require './config/database.rb'

class Projectupdate
    def self.proup(projectid)
       ris=DB.exec("select * from project where projectid=#{projectid}")
    end
end