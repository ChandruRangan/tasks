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
    // const Teammembers = req.body.tm1;
    // const Teammembers= req.body.tm2;
    const Prostartdate = req.body.psd;
    const Proenddate = req.body.ped;
    await client.db('Architectdb').collection('Project').insertOne({Projectname:Projectname,Projectlead:Projectlead,Projectstartdate:Prostartdate,Projectenddate:Proenddate})
    .then((res) => { console.log("inserted"); })
    .catch((err) => { console.log(err) });
})
app.get('/display',(req,res)=>{
    
})
app.listen(3001)