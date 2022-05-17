const express = require('express');
let router = express.Router();
 const Project = require('../model/projectschema'); 
router.get('/project',(req,res)=>{
res.render("project/projectcreate",{
    viewtitle:"INSERT PROJECT"
});
});
router.post('/project', (req,res) => {
    if (req.body._id == '')
    insertproject(req, res);
    else
    updateproject(req, res);
    });
function insertproject(req,res){
    const project= new Project();
    project.ProjectName=req.body.ProjectName;
    project.ProjectLead=req.body.ProjectLead;
    project.TeamMembers=req.body.TeamMembers;
    project.ProjectStartdate=req.body.ProjectStartdate;
    project.ProjectEnddate=req.body.ProjectEnddate;
    project.save((err,doc)=>{
     if(!err)
     res.redirect('/project/projectdisplay');
     else{console.log('err inserting project:'+err);
    }
    });
}
function updateproject(req,res){
    Project.findByIdAndUpdate({_id:req.body._id},req.body,(err,doc)=>{
   if(!err){res.redirect('project/projectdisplay');}
   else
   console.log('Error during updating the record: ' + err);
    });
}
router.get('/project/projectdisplay',(req,res)=>{
Project.find((err, docs) => {
    console.log(docs);
    if (!err) {
        res.render('project/projectdisplay',{
            display: docs
            });
        }
        else {
            console.log('error in :' + err);
        }
    });
});
router.get('/project/:_id', (req, res) => {
    Project.findById(req.params._id, (err, doc) => {
        console.log(doc);
        if (!err) {
            res.render("project/projectupdate", {
                viewtitle: "Update Project",
                project: doc
            });
}
    });
});
router.get('/project/delete/:_id', (req, res) => {
    Project.findByIdAndRemove(req.params._id, (err, doc) => {
        console.log(doc);
    if (!err) {
    res.redirect('/project/projectdisplay');
    }
    else { console.log('Failed to Delete Course Details: ' + err); }
    });
    }); 
module.exports=router;

