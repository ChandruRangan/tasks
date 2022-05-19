const express = require("express");
const app = express();
const router = require('express').Router();
module.exports = router;
const fs= require('fs');
var {parse}= require('csv-parse');
const csvtojson= require ('csvtojson');
const { json } = require("express/lib/response");
const csv= require('fast-csv');
const csvstringify= require('csv-stringify');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});
let result;

// fs.createReadStream("./datainput/test_case2/friends.csv").pipe(parser)
// fs.createReadStream("/home/agira/Desktop/test.csv").pipe(parser)
// .on("data", (data) => {
//     result.push(data);
//   })
// //   .on("end", () => {
//     //  console.log(result);
// //   });

csvtojson()
        .fromFile("/home/agira/Desktop/test.csv")
        .then(Data => {
          result=Data;
            //  console.log(result);
        });
          
// fs.writeFileSync("output.json",JSON.stringify(Data))
//         });


     

//  router.post('/',(req,res)=>{
//  for(let i=0; i<result.length;i++){
//    if(parseInt(result[i].Age)<50){
//       // res.send(result[i]);
//     // console.log(result[i])
//    }
//   //  else if(parseInt(result[i].age)>18){
//   //    console.log(result[i])
//   //  }
//  }
// }) 
const fresult=[];
// csvtojson()
//         .fromFile("/home/agira/Desktop/test.csv")
//         .then(result => {
 router.post('/',(req,res)=>{  
  const  filter = req.query.filter  ;
  if(filter===Remove_above_50){      
        for(var i=0;i<result.length;i++){
           if(result[i]['Age']<50){    
           
         fresult.push(result[i]);
      
        } 
       }
         console.log(fresult)
         res.send(fresult);
        }
        if(filter===fullname){
            for(var i=0;i<result.length;i++){
           
            const data={
              fullname:result[i]['First_name']+","+result[i]['Last_name']
            }
            fresult.push(data);
          }
            console.log(fresult)
             res.send(fresult);

         } 
         
         if(filter===EligibleVoting){
            for(var i=0;i<result.length;i++){
                if(result[i]['Age']>=18){
                   // result.newColumn = newColumnValue;
                  result[i].eligible_for_voting="T" ;
                   // console.log(result[i]);
                   }
                   else
                   {
                     result[i].eligible_for_voting="F";
                     //  console.log(result[i]);
                   }
                    fresult.push(result[i]);
                    }
                    console.log(fresult);
                    res.send(fresult);
                }
        });
    
      
 router.post('/',(req,res)=>{   
   console.log(req.query.filter)   
          for(var i=0;i<result.length;i++){
           
          const data={
            fullname:result[i]['First_name']+","+result[i]['Last_name']
          }
          fresult.push(data);
        }
          console.log(fresult)
           res.send(fresult);
        
      });


      router.post('/',(req,res)=>{      
        for(var i=0;i<result.length;i++){
          var Data={
                        //  name:result[i]['Name'],
                         dob:result[i]['DateofBirth']
                        };
          // var dateStr = JSON.parse(Data);  
          //         console.log(dateStr);
          
          var date = new Date(parseInt(Data.substr(6)));  
                    console.log(date);
                    fresult.push(Data);
        }
        console.log(fresult)
        res.send(fresult);
         });

      router.post('/',(req,res)=>{      
                  for(var i=0;i<result.length;i++){
               if(result[i]['Age']>=18){
                  // result.newColumn = newColumnValue;
                 result[i].eligible_for_voting="T" ;
                  // console.log(result[i]);
                  }
                  else
                  {
                    result[i].eligible_for_voting="F";
                    //  console.log(result[i]);
                  }
                   fresult.push(result[i]);
                   }
                   console.log(fresult);
                   res.send(fresult);
                            
              });

              router.post('/',(req,res)=>{      
                         for(var i=0;i<result.length;i++){
                            if(result[i]['Age']<50){    
                            
                          fresult.push(result[i]);

                         } 
                        }
                          console.log(fresult)
                          res.send(fresult);
                            
                        });        
        


                        for(const i=0; i<Dates.length; i++){
                            var month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                            var date = new Date(Dates[i]['dob']);
                            var format = month[date.getMonth(String)]+" "+date.getDate()+" "+date.getFullYear()
                            var row = {
                                Name: Dates[i]["firstName"],
                                Dob:format
                            };
                            dateFormat.push(row);
                        }
                        console.log(dateFormat)
                    })

                    if(filter==='dob'){
                        for(var i=0;i<result.length;i++){
                          var month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                          var date = new Date(result[i]['DateofBirth']);
                          var format = month[date.getMonth(String)]+" "+date.getDate()+" "+date.getFullYear()
                          var row = {
                            name: result[i]['Name'],
                            Dob:format
                        };
                        fresult.push(row); 

                      } 
                    }
                     res.send(fresult);

              });


              //  const fresult=[];      
// router.post('/',(req,res)=>{  
//   const  filter = req.query.filter  ;
//   //  const fresult=[];
//   if(filter==='Remove_above_50'){      
//         for(var i=0;i<result.length;i++){
//            if(result[i]['Age']<50){    
           
//          fresult.push(result[i]);
      
//         } 
//        }
//          console.log(fresult)
//         //  res.send(fresult);
//         }
//         if(filter==='fullname'){
//             for(var i=0;i<result.length;i++){
           
//             const data={
//               fullname:result[i]['First_name']+","+result[i]['Last_name']
//             }
//             fresult.push(data);
//           }
//             console.log(fresult)
//             //  res.send(fresult);

//          } 
         
//          if(filter==='EligibleVoting'){
//             for(var i=0;i<result.length;i++){
//                 if(result[i]['Age']>=18){
//                    // result.newColumn = newColumnValue;
//                   result[i].eligible_for_voting="T" ;
//                    // console.log(result[i]);
//                    }
//                    else
//                    {
//                      result[i].eligible_for_voting="F";
//                      //  console.log(result[i]);
//                    }
//                     fresult.push(result[i]);
//                     }
//                     console.log(fresult);
//                     // res.send(fresult);
//                 }
//                 res.send(fresult);
//         });







const express = require("express");
const app = express();
const router = require('express').Router();
module.exports = router;
const {CSVfile} = require("../model/csvmodel");
const fs= require('fs');
var {parse}= require('csv-parse');
const csvtojson= require ('csvtojson');
const { json } = require("express/lib/response");
const csv= require('fast-csv');
const csvstringify= require('csv-stringify');
const { response } = require("express");
const jsontocsv = require('json-2-csv');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});
let result;



csvtojson()
        .fromFile("/home/agira/Desktop/test.csv")
        .then(Data => {
          result=Data;
            // console.log(result);
        });
      var fresult=[];
      router.post('/',(req,res)=>{  
         filter = req.query.filter  
          // const fresult=[];
         if(filter==='Removeabove50'){      
              for(var i=0;i<result.length;i++){
                 if(result[i]['Age']<50){    
                 
               fresult.push(result[i]);
            
              } 
             }
              //  console.log(fresult)
              //  res.send(fresult);
              }
              if(filter==='fullname'){
                  for(var i=0;i<result.length;i++){
                 
                  const data={
                    fullname:result[i]['First_name']+","+result[i]['Last_name']
                  }
                  fresult.push(data);
                }
                  // console.log(fresult)
                  //  res.send(fresult);
      
               } 
               
               if(filter==='EligibleVoting'){
                  for(var i=0;i<result.length;i++){
                      if(result[i]['Age']>=18){
                         // result.newColumn = newColumnValue;
                        result[i].eligible_for_voting="T" ;
                         // console.log(result[i]);
                         }
                         else
                         {
                           result[i].eligible_for_voting="F";
                           //  console.log(result[i]);
                         }
                          fresult.push(result[i]);
                          }
                          // console.log(fresult);
                      }

                      if(filter==='dob'){
                        for(var i=0;i<result.length;i++){
                          var month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                          var date = new Date(result[i]['DateofBirth']);
                          var format = month[date.getMonth(String)]+" "+date.getDate()+" "+date.getFullYear()
                          var row = {
                            name: result[i]['Name'],
                            Dob:format
                        };
                        fresult.push(row); 

                        // console.log(row)

                      } 
                    }
                    res.send(fresult);
                  console.log(fresult);

             var csvfile= new CSVfile();
             csvfile.collection.insert(fresult, function (err, docs) {
              if (err){ 
                  return console.error(err);
              } else {
                console.log("csvdata inserted to Collection");
              }
            });


            jsontocsv.json2csv(fresult, (err, csv) => {
              console.log(fresult)
             if (err) {
                 throw err;
             }
         
             // print CSV string
             console.log(csv);

             fs.writeFileSync('fresult.csv', csv);
         });
     
          });
       //  res.send(fresult);


       jsontocsv.json2csv(fresult, (err, csv) => {
         console.log(fresult)
        if (err) {
            throw err;
        }
    
        // print CSV string
        console.log(csv);

        fs.writeFileSync('/home/agira/Desktop/fresult.csv', csv);
    });

                


               


               
        
    




      





    


          
    




      




