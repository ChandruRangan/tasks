

class Employee
    def insert(i)
     # @conn.parmas("e1"('insert imto employee'('employee_id','full_name','email','password','phone_number','joining_date','date_of_birth') 'values'['$1','$2','$3','$4','$5','$6','$7']))
     # @conn.exec_params("e1"[i])
     @conn.exec("insert into employee values['01','richu','richu@gmail.com],'richu','99999999','03-16-2022,'04-22-2000']")
    end
end

obj1=Employee.new
	
obj1.insert("01","richu","richu@gamil.com","richu","9999999999","03-16-2022","04-22-2000")

		
		

