require "./class/employee"
require "./module/empmodule"

class Admin < Employee
	
	attr_accessor :team		#getter and setter
  	
  	include Workable		#include the module
  
  	WORK="Maintaining Office External and Internal works"

  def admin_details		
	@role="Admin"
	create_info
  	show(@info)
  end

  def print_constant
  	puts "````````````````"
  	puts "Admin Work:#{Admin::WORK}"
  	puts "````````````````"
  end

end

