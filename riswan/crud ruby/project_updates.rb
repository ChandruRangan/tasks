
class Projectupdate
    def self.proup(projectid)
       DB.exec("select * from project where projectid=#{projectid}")
    end
end