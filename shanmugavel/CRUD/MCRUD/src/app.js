const express = require('express')
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const emp = require('../controller/emp');
const pro = require('../controller/pro');
app.post('/empinsert', emp.empinsert);
app.get('/', async (req, res) => {
    res.render('insert')
});
app.get('/datas', emp.empdisp);
app.post('/empsearch', emp.empsearch);
app.get('/empsearch', async (req, res) => {
    res.render('search')
})
app.get('/pro', async (req, res) => {
    res.render('insertpro')
})
app.post('/datas', emp.empsearch);
app.get('/delete', emp.empdel);
app.get('/empupdate', emp.empupdate);                 //fr find
app.post('/empupdate', emp.empupdating) ;                //fr updt




app.post('/insertpro', pro.insertpro);
app.get('/prodisp', pro.prodisp)

app.get('/deletepro', pro.prodel)

app.get("/prosearch",pro.prosrc)

app.get('/proupdate', pro.proupdate);
app.post('/proupdate', pro.proupdating);

// app.post('/proupdate', pro.prosrc);














    module.exports = app;






















// app.post('/empsearch',async(req,res)=>{
//     const search= req.body.search;
//     console.log(search);

// })
// app.delete('/delete',emp.empsearch);




















// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.json({ type: 'application/vnd.api+json' }));