
class Empdata
    def self.datas
       DB.exec('select * from employee')
    end
end
