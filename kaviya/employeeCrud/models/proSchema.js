const mongoose = require("mongoose");
var proSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: "please enter project name!",
    },
    projectLead: {
        type: String,
        required: "please enter project lead name!",
    },
    teamMember1: {
        type: String,
    },
    teamMember2: {
        type: String,
    },
    teamMember3: {
        type: String,
    },
    p_StartDate: {
        type: String,
    },
    p_EndDate: {
        type: String,
    },

});

module.exports = mongoose.model("projectdetails",proSchema);