 const Employee = require("../models/EmployeeSchema");
const db = require('../config/database');
// exports.signup = (req,res)=>{
//       const employee = new Employee(req.body);
//         employee.save((err, data)=>{
//             if(err){
//                 return res.json({
//                     error:"unable to add user"
//                 })
//             }
//             return res.json({
//                 message:"success",
//                 data
//             })
//       })
// }
exports.createUser = (req,res)=>{
    const token = generateAccessToken({Name:req.body.Name});
    res.json(token)
}