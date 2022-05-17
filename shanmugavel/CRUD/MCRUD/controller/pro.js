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
            // console.log(data);
            res.render('findpro',{pro:data})});

}

exports.insert=async(req,res)=>{
    res.render('insertpro')
}

exports.prodel = async (req,res)=>{
    const id = req.query.id;
    console.log(id)
    await client.collection('pro').deleteOne({_id:new ObjectId(id)})
  .then((data)=>{
    //   console.log(data)
    res.redirect('/prodisp');
  })
}



exports.proupdate=async(req,res)=>{
    const id= req.query.id;
   await client.collection('pro').findOne({_id:new ObjectId(id)})
   .then((data)=>{
    //    console.log(data)
       res.render('updatepro1',{pro:data})                                                                      //snd.fle
   })
}


exports.proupdating=async(req,res)=>{
const {ProjectName,ProjectLead,StartDate,EndDate,TeamMembers}=req.body;
console.log(req.body)
const id= req.query.id;
await client.collection('pro').updateOne({'_id':ObjectId(id)},{$set:{ProjectName:ProjectName,ProjectLead:ProjectLead,StartDate:StartDate,EndDate:EndDate,TeamMembers:TeamMembers}},{w:6},(err,result)=>{
  if(!err){
      res.redirect('/prodisp')
  }
  else{
   res.status(400).json({ message: err });
  }
})
}



exports.prosearch = async (req, res) => {

    const val=req.body.search;
    console.log(val);
   let data= await client.collection('pro').find({ProjectName:val})
   console.log(data)
   
   let data1 = [data]
   res.render('prosearch',{pro:data1})

}


// app.post('/updatepro', async (req, res) => {
//     const { Proid, ProjectName, ProjectLead, TeamMembers, StartDate, EndDate } = req.body;
//         await client.db('Architectdb').collection('Project').updateOne({ PROID: Proid }, { $set: { Projectname: ProjectName, Projectlead: ProjectLead, Teammember: TeamMembers, Projectstartdate: StartDate, Projectenddate: EndDate } })
//             .then(() => {
//                 res.redirect('/pro')
//             })
//             .catch((err) => { console.log(err) });
//     })
//     +1
//     clap
//     raised_hands
    
    
    
    
    
    
//     app.get('/updatepro', async (req, res) => {
//         const data = req.query.PROID
//         await client.db('Architectdb').collection('Project').findOne({ PROID: data })
//             .then((data) => {
//                 //let data2 = [data]
//                 //console.log(data)
//                 res.render('updateproject', { Project: data })
//             })
//     })













