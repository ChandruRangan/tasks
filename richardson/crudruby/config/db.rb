require "pg"


$rich = PG::Connection.new(:dbname => 'company',:host => 'localhost',:user => 'richardson',:password => 'richardson')
puts "connected"
#conn.exec("insert into employee values(02,'richu','richu@gmail.com','richu',77,'03-16-2022','04-22-2000')")
