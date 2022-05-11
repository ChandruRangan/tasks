require "./class/employee"
require "./module/empmodule"

class Developer < Employee
	
	attr_accessor :team		#getter and setter
  	
  	include Workable		#include the module
  
  def developer_details
	@role="Developer"
  	create_info
  	show(@info)
  end
  	
end

