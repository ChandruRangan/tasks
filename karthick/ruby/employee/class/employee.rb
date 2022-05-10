class Employee
  
  attr_accessor :fullname,:age,:salary
  
  def initialize(fname,age,salary)
    @fullname=fname
    @age=age
    @salary=salary
  end

  def show_tax
    calculate_tax
  end
  
  private
  def calculate_tax
    tax=(@salary*0.15).to_i
  end

end
