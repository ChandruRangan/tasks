const CSVToJSON = require('csvtojson');
const fs = require('fs');
CSVToJSON().fromFile('Employees.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);

        // Write JSON array to a file
        fs.writeFile('Employees.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    }).catch(err => {
        // log error if any
        console.log(err);
    });

    const empfile = '/home/agira/Desktop/Employees.csv';
    var emparray = [];
    CSVToJSON().fromFile('Employees.csv').then(csvfile => {
        for (var i = 0; i < csvfile.length; i++) {
            var row = {
                name:  csvfile[i]['first_name'] + ',' + csvfile[i]['last_name']
              };
                      emparray.push(row);
            }
            console.log(emparray)
    })