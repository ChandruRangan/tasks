require "./class/employee"
require "./module/empmodule"

class Developer < Employee
	
	attr_accessor :team		#getter and setter
  	
  	include Workable		#include the module
  
  	WORK="Application Development and Website Development"
  
  def developer_details
	@role="Developer"
  	create_info
  	show(@info)
  end

  def print_constant
  	puts "````````````````"
  	puts "Developer Work:#{Developer::WORK}"
  	puts "````````````````"
  end

end

