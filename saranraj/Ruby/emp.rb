class Employee
  attr_accessor:name,:age,:salary
  def initialize (name,age,salary)
    @name=name;
    @age=age
    @salary=salary
   
  end
  def get_tax (salary)
    p tax_calc(salary)
  end
  private
  def tax_calc(salary)
    return salary*0.15
  end
end
 
class Developer < Employee
  def initialize (name,age,salary,dev_tool,dev_team)
    super(name,age,salary)
    DEVTOOL=dev_tool
    DEVTEAM=dev_team
  end
end

class Admin < Employee
  def initialize(name,age,salary,admin_id,admin_roll)
    super(name,age,salary)
    ADMINID=admin_id
    ADMINROLL=admin_roll
  end
end
# empobj=Employee.new("saran",21,10000);
# empobj.get_tax(empobj.salary);
devobi=Developer.new("saran",21,10000,'ruby','webapp');
devobi.get_tax(devobi.salary)
