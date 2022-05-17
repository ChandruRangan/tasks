const express = require('express')
const app = express();
const alert = require('alert');
require("dotenv").config();
//var methodOverride = require('method-override')
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
const client = require('./mongo');
app.get('/',(req, res) => {
    res.render('emp');
})
app.get('/pro', async (req, res) => {
    res.render('project');
})
app.post('/insert', async (req, res) => {
    const date = new Date(req.body.doj);
    const jdate = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()
    //console.log(jdate)
    const empid = req.body.ID;
    const fullname = req.body.fname;
    const email = req.body.email;
    const password = req.body.pwd;
    const phoneno = req.body.phno;
    const DOJ = jdate;
    const DOB = req.body.dob;
    await client.db('Architectdb').collection('Emp').insertOne({ EMPID: empid, Name: fullname, Email: email, Password: password, Phoneno: phoneno, DOJ: DOJ, DOB: DOB }) 
    .then(() => {
        alert("inserted data")
            res.redirect('/')
        })
        .catch((err) => { console.log(err) });
})
app.post('/insert1', async (req, res) => {
    const { Proid, ProjectName, ProjectLead, TeamMembers, StartDate, EndDate } = req.body;
    await client.db('Architectdb').collection('Project').insertOne({ PROID: Proid, Projectname: ProjectName, Projectlead: ProjectLead, Teammember: TeamMembers, Projectstartdate: StartDate, Projectenddate: EndDate })
        .then(() => {
            alert("inserted data")
            res.redirect('/')
        })
        .catch((err) => { console.log(err) });
})
app.get('/display', async (req, res) => {
    await client.db('Architectdb').collection('Emp').find({}).toArray()
        .then((data) => {
            //console.log(data);
            res.render('employeedisplay', { Employee: data })
        })
        .catch((err) => {
            res.json({ message: err });
        });
});
app.get('/displaypro', async (req, res) => {
    await client.db('Architectdb').collection('Project').find({}).toArray()
        .then((data) => {
            res.render('projectdisplay', { Project: data })
        })
        .catch((err) => {
            res.json({ message: err });
        });
});
app.post('/searchemp', async (req, res) => {
    const input = req.body.search;
    await client.db('Architectdb').collection('Emp').findOne({$or:[{Name:{$regex : input}},{Phoneno:{$regex:input}},{Email:{$regex:input}}]})
        .then((data) => {
            let data1 = [data]
            //console.log(data)
            res.render('employeedisplay', { Employee: data1})

        })
        .catch((err) => {
            res.json({ message: err });
        });
})
app.post('/searchpro', async (req, res) => {
    const input = req.body.search;
    await client.db('Architectdb').collection('Project').findOne({$or:[{Projectname:{$regex : input }},{Projectlead:{$regex:input}},{Teammember:{$regex:input}}]})
        .then((data) => {
            let data2 = [data]
            // console.log(data)
            res.render('projectdisplay', { Project: data2 })
        })
        .catch((err) => {
            res.json({ message: err });
        });
})
app.get('/delete', async (req, res) => {
    const data = req.query.EMPID
    //console.log(data)
    await client.db('Architectdb').collection('Emp').deleteOne({ EMPID: data })
        .then((data) => {
            alert("Deleted Data")
            res.redirect('/display');
        })
})

app.get('/deletepro', async (req, res) => {
    const data = req.query.PROID
    // console.log(data)
    await client.db('Architectdb').collection('Project').deleteOne({ PROID: data })
        .then((data) => {
            alert("Deleted Data")
            res.redirect('/displaypro');
        })
})
app.get('/updateemp', async (req, res) => {
    const data = req.query.EMPID
    await client.db('Architectdb').collection('Emp').findOne({ EMPID: data })
        .then((data) => {
           // console.log(data)
            res.render('updateemployee', { Employee: data })
        })
})
app.post('/updateemp', async (req, res) => {
    // const date = new Date(req.body.doj);
    // const jdate = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear()
    const empid = req.body.ID;
    const fullname = req.body.fname;
    const email = req.body.email;
    const password = req.body.pwd;
    const phoneno = req.body.phno;
    const DOJ = req.body.doj;
    const DOB = req.body.dob;
    await client.db('Architectdb').collection('Emp').updateOne({ EMPID: empid }, { $set: { Name: fullname, Email: email, Password: password, Phoneno: phoneno, DOJ: DOJ, DOB: DOB } })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => { console.log(err) });
})
app.post('/updatepro', async (req, res) => {
    const { Proid, ProjectName, ProjectLead, TeamMembers, StartDate, EndDate } = req.body;
    await client.db('Architectdb').collection('Project').updateOne({ PROID: Proid }, { $set: { Projectname: ProjectName, Projectlead: ProjectLead, Teammember: TeamMembers, Projectstartdate: StartDate, Projectenddate: EndDate } })
        .then(() => {
            res.redirect('/pro')
        })
        .catch((err) => { console.log(err) });
})
app.get('/updatepro', async (req, res) => {
    const data = req.query.PROID
    await client.db('Architectdb').collection('Project').findOne({ PROID: data })
        .then((data) => {
            res.render('updateproject', { Project: data })
        })
})
app.listen(3007)