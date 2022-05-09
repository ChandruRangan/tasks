const ObjectId = require('mongodb').ObjectId;
const client = require('../config/db');
exports.insertpro=async(req,resp)=>{
    const {ProjectName,ProjectLead,StartDate,EndDate,TeamMembers}=req.body;
    await client.collection('pro').insertOne({ ProjectName:ProjectName,ProjectLead:ProjectLead,StartDate:StartDate,EndDate:EndDate,TeamMembers:TeamMembers })
    .then((res) => {
        resp.redirect('/pro');
    })
    .catch((err) => {
        console.log(err);
    });
}
exports.prodisp = async (req, res) => {
    await client.collection('pro').find().toArray()
        .then(data=>{ 
            console.log(data);
            res.render('findpro',{pro:data})});

}