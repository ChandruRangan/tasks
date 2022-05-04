// const { Employee} = require('./model/EmpModel');

    const { Db } = require('mongodb');
const  Employee=require('./model/EmpModel');

exports.new = function (req,res){
    Employee.get(function (err,CRUDtask){



      
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Employee read successfully",
            data: Emptable
        });
    });
}

exports.app = function (req,res){
    var Employe= new Employee();
    Employe.fn=req.body.FN;
    Employe.e=req.body.email;
    Employe.Pd=req.body.Pwd;
    Employe.phn=req.body.phoneno;
    Employe.Jd=req.body.Joindate;
    Employe.dob=req.body.DOB;

    Employe.save(function (err){
        if(err)
        res.json(err);
    res.json({
        message:'Employee table created ',
        data:Emptable
    });
    });
};

// view Employee

// exports.view=function (req,res){
//     Employee.find(req.params.Employee_id, function(err,Employe){
// if(err)
//     res.send(err);
//     res.json({
//         message:'Employee details loading',
//         data:Employe
//     });
// });
// };

// update Employee

// exports.update=function(req,res){
//     Employee.findById(req.params.Employee_id, function(err,Employe){
//         if(err)
//             res.send(err);
//             Employe.fn=req.body.FN;
//             Employe.e=req.body.email;
//             Employe.Pd=req.body.Pwd;
//             Employe.phn=req.body.phoneno;
//             Employe.Jd=req.body.Joindate;
//             Employe.dob=req.body.DOB;   
            
//         Employe.save(function (err){
//                 if(err)
//                 res.json(err);
//             res.json({
//                 message:'Employee table updated ',
//                 data:Employe
//             });
//         });
//     });
// }

// delete Employee 

// exports.delete = function(req,res){
//     Employee.remove({
//        _id:req.params.Employee_id
//     },function(err,Employe){
//         if(err)
//         res.send(err);

//         res.json({
//             status:"success",
//             message:'Employee deleted',
//             data:Employe
//         });
//     });
// };









