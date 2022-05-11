const mongoose = require("mongoose");

const ProjectSchema=new mongoose.Schema({

    ProjectName:{
        type:String,
    },

    ProjectLead:{
        type:String,
    },
    TeamMembers:{
        type:String,
    },
    ProjectstartDate:{
        type:Date,
    },
    ProjectEndDate:{
        type:Date,
    }

});

const Project = mongoose.model('Project',ProjectSchema,'projects');

module.exports={Project}