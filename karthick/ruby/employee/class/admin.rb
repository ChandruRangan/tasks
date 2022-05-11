require "./class/employee"
require "./module/empmodule"

class Admin < Employee
	
	attr_accessor :team		#getter and setter
  	
  	include Workable		#include the module
  
  def admin_details		
	@role="Admin"
	create_info
  	show(@info)
  end

end

