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
    const date = new Date(req.body.doj);
    const jdate = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()
    const empid = req.body.ID;
    const fullname = req.body.fname;
    const email = req.body.email;
    const password = req.body.pwd;
    const phoneno= req.body.phno;
    const DOJ = jdate;
    const DOB = req.body.dob;
    await client.db('Architectdb').collection('Emp').insertOne({EMPID:empid,Name:fullname,Email:email,Password:password,Phoneno:phoneno,DOJ:DOJ,DOB:DOB})
    .then(()=>{
        res.redirect('/')
    })
    .catch((err) => { console.log(err) });
})
app.post('/insert1',async(req,res)=>{
    const Proid = req.body.ID;
    const Projectname = req.body.projectname;
    const Projectlead = req.body.projectlead;
    const Teammember = req.body.tm;
    const Prostartdate = req.body.psd;
    const Proenddate = req.body.ped;
    await client.db('Architectdb').collection('Project').insertOne({ PROID:Proid,Projectname:Projectname,Projectlead:Projectlead,Teammember:Teammember,Projectstartdate:Prostartdate,Projectenddate:Proenddate})
    .then(()=>{
        res.redirect('/pro')
    })
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
    const data = req.query.EMPID
    console.log(data)
    await client.db('Architectdb').collection('Emp').deleteOne({EMPID:data})
  .then((data)=>{
     // console.log(data)
    res.redirect('/display');
  })
})

app.get('/deletepro',async(req,res)=>{
    const data = req.query.PROID
    console.log(data)
    await client.db('Architectdb').collection('Project').deleteOne({PROID:data})
  .then((data)=>{
     // console.log(data)
    res.redirect('/displaypro');
  })
})
app.get('/updateemp',async(req,res)=>{
    const data = req.query.EMPID
    await client.db('Architectdb').collection('Emp').findOne({EMPID:data})
    .then((data)=>{
       // let data2 = [data]
        //console.log(data)
        res.render('updateemployee',{Employee:data})
    })
})
app.post('/updateemp',async(req,res)=>{
    const date = new Date(req.body.doj);
    const jdate = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()
    const empid = req.body.ID;
    const fullname = req.body.fname;
    const email = req.body.email;
    const password = req.body.pwd;
    const phoneno= req.body.phno;
    const DOJ = req.body.jdate;
    const DOB = req.body.dob;  
    console.log(DOJ)
    await client.db('Architectdb').collection('Emp').updateOne({EMPID:empid},{$set:{Name:fullname,Email:email,Password:password,Phoneno:phoneno,DOJ:DOJ,DOB:DOB}})
    .then(()=>{
        res.redirect('/')
    })
    .catch((err) => { console.log(err) });
})
app.post('/updatepro',async(req,res)=>{
    const Proid = req.body.ID;
    const Projectname = req.body.projectname;
    const Projectlead = req.body.projectlead;
    const Teammember = req.body.tm;
    const Prostartdate = req.body.psd;
    const Proenddate = req.body.ped;
    await client.db('Architectdb').collection('Project').updateOne({ PROID:Proid},{$set:{Projectname:Projectname,Projectlead:Projectlead,Teammember:Teammember,Projectstartdate:Prostartdate,Projectenddate:Proenddate}})
    .then(()=>{
        res.redirect('/pro')
    })
    .catch((err) => { console.log(err) });
})
app.get('/updatepro',async(req,res)=>{
    const data = req.query.PROID
    await client.db('Architectdb').collection('Project').findOne({PROID:data})
    .then((data)=>{
        //let data2 = [data]
        //console.log(data)
        res.render('updateproject',{Project:data})
    })
})

app.listen(3004)