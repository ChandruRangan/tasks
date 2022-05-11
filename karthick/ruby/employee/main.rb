require "./class/admin"
require "./class/developer"
require "./module/path"

include Showable

#create object for admin 1
admin_1=Admin.new("Richardson",21,15000)
admin_1.team="Hardware"
admin_1.admin_details
admin_1.print_constant

#create object for admin 2
admin_2=Admin.new("Riswan",22,18000)
admin_2.team="Networking"
admin_2.admin_details
admin_2.print_constant

show_lookup_path(Admin)


#create object for developer 1
dev_1=Developer.new("Karthick",20,10000)
dev_1.team="Ruby on Rails"
dev_1.developer_details
dev_1.print_constant


#create object for developer 2
dev_2=Developer.new("Santhosh",21,16000)
dev_2.team="Nodejs"
dev_2.developer_details
dev_2.print_constant

show_lookup_path(Developer)
