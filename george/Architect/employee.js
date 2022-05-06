const req = require('express/lib/request');
const res = require('express/lib/response');
const client = require('./mongo');
exports.employeeinsert = async (req, resp) => {
    const { Full_name, Email_Address, Password, Phone_Number, Joining_Date, DOB } = req.body;
    await client.db('Architectdb').collection('Emp').insertOne({ Name: Full_name, mail: Email_Address, password: Password, Phno: Phone_Number, JoiningDate: Joining_Date, dob: DOB })
        .then((res) => { console.log(res); })
        .catch((err) => { console.log(err) });
}








