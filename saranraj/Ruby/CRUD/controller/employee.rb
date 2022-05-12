require './config/dbpostgres.rb'
require './defined_methods/methods.rb'
include METHODS
class Empcontroller < Dbconnection
  def initialize()
    super
    @conn.prepare('insertemp', 'insert into Employee(fname, email,password,phoneno,joining_date,date_of_birth) values ($1, $2, $3, $4, $5, $6)')
    @conn.prepare('updateemp', 'update  Employee set fname=$1, email=$2 ,password=$3, phoneno=$4, joining_date=$5, date_of_birth=$6 where emp_id=$7')
  end
    
  def insert(val)
    @conn.exec_prepared('insertemp',val)
  end
  def listout()
    return  @conn.exec('select * from Employee')
  end
  def deleteemp(id)
    @conn.exec("delete from Employee where emp_id=#{id}")
  end
  def getemp(id)
    return @conn.exec("select * from Employee where emp_id=#{id}")
  end
  def updateemp(val,id)
    @conn.exec_prepared('updateemp',val.push(id))
  end
  
end

# emp.conn.exec_prepared('statement1', ['richar','rich@gmail.com','richu',965465565,'2022-06-06','2022-06-06' ])
# Empcontroller.new.getemp(5);