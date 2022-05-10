require "./class/admin"
require "./class/developer"
require "./module/path"

include Showable

#create object for admin 1
admin_1=Admin.new("Richardson",21,15000)
admin_1.team="Hardware"
admin_1.admin_details

#create object for admin 2
admin_2=Admin.new("Riswan",22,18000)
admin_2.team="Networking"
admin_2.admin_details

show_lookup_path(Admin)


#create object for developer 1
dev1=Developer.new("Karthick",20,10000)
dev1.team="Ruby on Rails"
dev1.developer_details


#create object for developer 2
dev2=Developer.new("Santhosh",21,16000)
dev2.team="Nodejs"
dev2.developer_details


show_lookup_path(Developer)