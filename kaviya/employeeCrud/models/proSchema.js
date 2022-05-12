const mongoose = require("mongoose");
var proSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectLead: {
        type: String,
        required: true,
    },
    teamMember1: {
        type: String,
        required: true,
    },
    teamMember2: {
        type: String,
    },
    teamMember3: {
        type: String,
    },
    p_StartDate: {
        type: Date,
    },
    p_EndDate: {
        type: Date,
    },

});
proSchema.path("p_EndDate").validate((val,err) =>{
    if(!err){ 
        const p_StartDate = new Date();
        const p_EndDate = new Date();
         p_StartDate > p_EndDate;
    return p_EndDate.test(val);
    }
    else{
        console.log(err);
    }
},'please enter the valid project end date'),

proSchema.path("p_StartDate").validate((val,err) =>{
    if(!err){   
    p_StartDate = p_StartDate < p_EndDate;
    return p_StartDate.test(val);
    }
    else{
        console.log(err);
    }
},'please enter the valid project end date'),

module.exports = mongoose.model("projectdetails",proSchema);