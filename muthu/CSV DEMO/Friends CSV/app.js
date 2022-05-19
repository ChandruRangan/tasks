// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('Friends.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);

        // Write JSON array to a file
        fs.writeFile('Friends.json', JSON.stringify(users, null, 4), (err) => {
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
    CSVToJSON().fromFile('Friends.csv').then(csvfile => {
                                                                    
            for (var i = 0; i < csvfile.length; i++) {
                var row = {
                     name: csvfile[i]["name"],
                     age: csvfile[i]['age']
                 };
                          frndarray.push(row);
                          var friend = frndarray.filter((values)=>{
                            return values.age <50;
                         });
                }
               console.log(friend);
            })