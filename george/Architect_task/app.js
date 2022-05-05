const express=require('express')
const app = express();
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
const client = require ('./mongo');
app.get('/',async(req,res)=>{
    res.render('emp');
})
app.get('/pro',async(req,res)=>{
    res.render('project');
})
app.post('/insert',async (req,res)=>{
    const fullname = req.body.fname;
    const email = req.body.email;
    const password = req.body.pwd;
    const DOJ = req.body.doj;
    const DOB = req.body.dob;
    await client.db('Architectdb').collection('Emp').insertOne({Name:fullname,Email:email,Password:password,DOJ:DOJ,DOB:DOB})
    .then((res) => { console.log("inserted"); })
    .catch((err) => { console.log(err) });
})
app.post('/insert1',async(req,res)=>{
    const Projectname = req.body.projectname;
    const Projectlead = req.body.projectlead;
    const Teammember = req.body.tm;
    const Prostartdate = req.body.psd;
    const Proenddate = req.body.ped;
    await client.db('Architectdb').collection('Project').insertOne({Projectname:Projectname,Projectlead:Projectlead,Teammember:Teammember,Projectstartdate:Prostartdate,Projectenddate:Proenddate})
    .then((res) => { console.log("inserted"); })
    .catch((err) => { console.log(err) });
})
app.get('/display',async(req,res)=>{
    await client.db('Architectdb').collection('Emp').find({}).toArray()
    .then((data)=>{
        res.render('employeedisplay',{Employee:data})
    })
    .catch((err) => {
        res.json({ message: err });
      });
});
app.get('/displaypro',async(req,res)=>{
    await client.db('Architectdb').collection('Project').find({}).toArray()
    .then((data)=>{
        res.render('projectdisplay',{Project:data})
    })
    .catch((err) => {
        res.json({ message: err });
      });
});
app.post('/searchemp', async(req,res)=>{
    const input= req.body.search;
    await client.db('Architectdb').collection('Emp').findOne({Name:input})
    .then((data)=>{
        let data1=[data]
        res.render('employeedisplay',{Employee:data1}) 

    })
    .catch((err) => {
        res.json({ message: err });
      });
})
app.post('/searchpro',async(req,res)=>{
    const input= req.body.search;
    await client.db('Architectdb').collection('Project').findOne({Projectname:input})
    .then((data)=>{
        let data2 = [data]
        res.render('projectdisplay',{Project:data2})
    })
    .catch((err) => {
        res.json({ message: err });
      });
})
app.get('/delete',async(req,res)=>{
    await client.db('Architect').collection('Emp').deleteOne({}) 
})

app.listen(3001)