// const csvtojson = require('csvtojson')

// const filename = 'friends.csv';
// csvtojson()
// .fromFile(filename)
// .then(csvfile => {
//     const filedata = csvfile;
//     const age = filedata.filter(d => d.age<50)
//     console.log(age);
// })
// .catch((err) => {
//     console.log(err);
// })

// result = []
// const filename1 = 'employees.csv';
// csvtojson()
// .fromFile(filename1)
// .then(csvdata => {
//     const data = csvdata;
//     for(let i = 0; i < data.length; i++){
//         const a = {
//             name:data[i]['first_name'] + ',' +data[i]['last_name']
//         }
//         result.push(a)
//         result.push(JSON.stringify(a))
//     }
//     console.log(result)
//     })

// const filename2 = 'people.csv';
// csvtojson()
// .fromFile(filename2)
// .then(csvfile => {
//     let data = csvfile;
//     for(i = 0; i < data.length; i++){
//         data[i]['age'] > 18 ? data[i].eligible_for_voting = 'T' : data [i].eligible_for_voting = 'F'
//     }
//     console.log(data)
// })
// const filename3 = 'student.csv';
// let res = [];
// csvtojson()
// .fromFile(filename3)
// .then(csvfile => {
//     for(let i =0; i < csvfile.length; i++){
//         let months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//         let date = new Date(csvfile[i]['dob']);
//         let formatting = months[date.getMonth(String)]+' '+date.getDate()+'-'+date.getFullYear()
//         let data = {
//             name: csvfile[i]['name'],
//             dob:formatting
//         };
//         res.push(data);
//     }
//     console.log(res);
// })

// data[i]['age'] > 18 ? data[i].eligible_for_voting = 'T' : data[i].eligible_for_voting = 'F'