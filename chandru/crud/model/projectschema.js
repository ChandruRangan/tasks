const mongoose =require('mongoose');
const projectSchema= new mongoose.Schema({
    ProjectName:{
        type:String
    },
    ProjectLead:{
        type:String
    },
    TeamMembers:{
        type:String
    },
    ProjectStartdate:{
        type:Date
    },
    ProjectEnddate:{
        type:Date
    }
});
module.exports = mongoose.model('project', projectSchema, 'Project');