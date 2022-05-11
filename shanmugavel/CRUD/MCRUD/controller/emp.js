

const ObjectId = require('mongodb').ObjectId;
const client = require('../config/db');                                         //rq-cli-incom
                                                                                //rs-snd
exports.empinsert = async (req, res) => {
    console.log(req.body)
    const { Fname, Email_id, Password, Phone, Join_date, DOB } = req.body;
    await client.collection('emp').insertOne({ Name: Fname, mail: Email_id, password: Password, phno: Phone, joining: Join_date, dob: DOB })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.insert=async(req,res)=>{
    res.render('insert')
}

exports.empdisp = async (req, res) => {
    await client.collection('emp').find().toArray()
        .then(data=>{ 
            // console.log(data);
            res.render('find',{emp:data})});

}

exports.empsearch = async (req, res) => {

    const val=req.body.search;
   let data= await client.collection('emp').findOne({$or:[{Name:val},{phno:{$regex:val}},{mail:val}]})

//    let data= await client.collection('emp').find({Name:val})

    // .then((data)=>{
    //     // console.log(data)
    //    if(data){
    //     let data1 = [data]
    //     res.render('search',{emp:data1})
        
    //    }
    //     else{
    //         res.redirect('/datas')
    //     }
    // })
    console.log(data);
    let data1 = [data]
    res.render('search',{emp:data1})

}

exports.empdel = async (req,res)=>{
        const id = req.query.id;
        
        await client.collection('emp').deleteOne({_id:new ObjectId(id)})
      .then((data)=>{
          console.log(data)
        res.redirect('/datas');
      })
    }



exports.empupdate=async(req,res)=>{
         const id= req.query.id;
        await client.collection('emp').findOne({_id:new ObjectId(id)})
        .then((data)=>{
            console.log(data)
            res.render('updateemp',{emp:data})                                                                      //snd.fle
        })
}


exports.empupdating=async(req,res)=>{
    const {id,Name,Email,Password,phonenumber,DOJ,DOB }=req.body;
    console.log(id);
    await client.collection('emp').updateMany({'_id':ObjectId(id)},{$set:{Name:Name,mail:Email,password:Password,phno:phonenumber,joining:DOJ,dob:DOB}},{w:6},(err,result)=>{
       if(!err){
           res.redirect('/datas')
       }
       else{
        res.status(400).json({ message: err });
       }
    })
}












//     await client.collection('emp').findOneAndDelete({mail:value}
//         .then(req,res))
// }








// exports.empdelete=async (req ,res)=>{
//     const emp_id = req.query.id;
   
//      await client.collection('emp').findByIdAndRemove( emp_id , function(err, res) {
//         if (err) {
//         throw err;
//         } else {
//           return res.redirect('/'); 
//         }
//       });
   
// }
