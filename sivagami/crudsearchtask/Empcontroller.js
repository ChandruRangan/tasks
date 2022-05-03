// const { Employee} = require('./model/EmpModel');

    Employee_table=require('./model/EmpModel');

exports.app = function (req,res){
    Employee_table .get(function (err,Emptable){
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

exports.new = function (req,res){
    var Employee= new Employee_table();
    Employee.fn=req.body.FN;
    Employee.e=req.body.email;
    Employee.Pd=req.body.Pwd;
    Employee.phn=req.body.phoneno;
    Employee.Jd=req.body.Joindate;
    Employee.dob=req.body.DOB;

    Employee.save(function (err){
        if(err)
        res.json(err);
    res.json({
        message:'Employee table created ',
        data:Employee
    });
    });
};

// view Employee

exports.view=function (req,res){
    Employee_table.findById(req.params.Employee_id, function(err,Employee){
if(err)
    res.send(err);
    res.json({
        message:'Employee details loading',
        data:Employee
    });
});
};

// update Employee

exports.update=function(req,res){
    Employee_table.findById(req.params.Employee_id, function(err,Employee){
        if(err)
            res.send(err);
            Employee.fn=req.body.FN;
            Employee.e=req.body.email;
            Employee.Pd=req.body.Pwd;
            Employee.phn=req.body.phoneno;
            Employee.Jd=req.body.Joindate;
            Employee.dob=req.body.DOB;   
            
        Employee.save(function (err){
                if(err)
                res.json(err);
            res.json({
                message:'Employee table updated ',
                data:Employee
            });
        });
    });
}

// delete Employee 

exports.delete = function(req,res){
    Employee_table.remove({
       _id:req.params.Employee_id
    },function(err,Employee){
        if(err)
        res.send(err);

        res.json({
            status:"success",
            message:'Employee deleted'
        });
    });
};









