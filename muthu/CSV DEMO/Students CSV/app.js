const CSVToJSON = require('csvtojson');
const fs = require('fs');
CSVToJSON().fromFile('Students.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);

        // Write JSON array to a file
        fs.writeFile('Students.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    }).catch(err => {
        // log error if any
        console.log(err);
    });

const stufile = '/home/ag/Desktop/Students.csv';
var stuarray = [];
CSVToJSON().fromFile(stufile).then(csvfile => {
    for (var i = 0; i < csvfile.length; i++) {
                  var time = []
                  var  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  var date = new Date(csvfile[i]['dob']);
                  var fordate = months[(date.getMonth(String))]+" "+date.getDate()+" "+date.getFullYear()
                 time.push(fordate)
                 var row = {
                  Name: csvfile[i]["name"],
                   Dob:fordate
                };
       stuarray.push(row);
    }
    console.log(stuarray)
})