require 'pg'


begin
        DB = PG.connect(
        host: 'localhost',
        dbname: 'crudruby',
        user: 'riswan1',
        password: 'Riswan@123',
 )

 p "success"
rescue e
        p e
end
