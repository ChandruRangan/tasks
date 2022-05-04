

const ObjectId = require('mongodb').ObjectId;
const client = require('../config/db');
exports.employeeinsert = async (req, resp) => {
    console.log(req.body)
    const { Full_name, Email_Address, Password, Phone_Number, Joining_Date, DOB } = req.body;
    await client.db('SHANMUGAVEL').collection('Employee').insertOne({ Name: Full_name, mail: Email_Address, password: Password, Phno: Phone_Number, JoiningDate: Joining_Date, dob: DOB })
        .then((res) => { console.log(res); })
        .catch((err) => { console.log(err) });
}
exports.listemployee = async (req, res) => {
    const data = await client.db('SHANMUGAVEL').collection('Employee').find({}).toArray().then(data => data);

    // console.log(data);
    res.render("index", { employee: data })

}
exports.empsearch = async (req, res) => {


    // const { empname } = req.body;
    const { input } = req.body;

    const data = await client.db('SHANMUGAVEL').collection('Employee').findOne({ Name: input });
    let data1 = [data]
    console.log(data1)
    res.render('index', { employee: data1 })
}

exports.empdelete=async (req ,res)=>{
    const emp_id = req.query.id;
   
     await client.db('SHANMUGAVEL').collection('Employee').findByIdAndRemove( emp_id , function(err, res) {
        if (err) {
        throw err;
        } else {
          return res.redirect('/'); 
        }
      });

  

    
   
}



