require 'pg'

#    configure: Project do
#        client:"pg",
#        connection: {
#         host: "localhost",
#         database: "cruddb",
#         user: "sharmi",
#         password: 1323
# }

# #     end
# connection=PG.connect(dbname:'cruddb',user:'sharmi',password:'1323',host:'localhost');

     DB=PG.connect(
        host: 'localhost',
        dbname: 'cruddb',
        user: 'sharmi',
        password: '1323'
        )

