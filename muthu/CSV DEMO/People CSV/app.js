const CSVToJSON = require('csvtojson');
const fs = require('fs');
CSVToJSON().fromFile('People.csv')
    .then(users => {
         // users is a JSON array
        // log the JSON array
        console.log(users);
         // Write JSON array to a file
        fs.writeFile('People.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    }).catch(err => {
        // log error if any
        console.log(err);
    });

   let frndarray = []
    CSVToJSON().fromFile('People.csv').then(csvfile => {
                                                                    
            for (var i = 0; i < csvfile.length; i++) {
                var row = {
                     name: csvfile[i]["name"],
                     age: csvfile[i]['age'],
                     eligible_for_voting:csvfile[i]['eligible_for_voting']
                 };
                          frndarray.push(row);
                          var friend = frndarray.filter((values)=>{
                            return values.age >18;
                         });
                }
               console.log(friend);
            })