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
        type:String,
    },
    ProjectEndDate:{
        type:String,
    }

});

const Project = mongoose.model('Project',ProjectSchema,'projects');

module.exports={Project}