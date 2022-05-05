const { db } = require("./dbconfig");

exports.update = async (req, res) => {
  const id = parseInt(req.query.id);
  await db
    .select("*")
    .from("employee")
    .where("employee_id", id)
    .then((data) => {
        db.select("*")
      .from("employee")
      .then((cat)=>{
          res.render("updateemp", { data: data, id: id});
        })
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
exports.updatedata=(async(req,res)=>{
    let empid=parseInt(req.query.id);
    console.log(empid);
    const fname = req.body.fullname;
    const email = req.body.email;
    const pwd = req.body.password;
    const phno = req.body.phone;
    const jdate = req.body.doj;
    const dob = req.body.dob;
    db('employee')
    .where('employee_id',empid)
    .update({
      fullname: fname,
      email: email,
      password : pwd,
      phone_number : phno,
      joiningdate : jdate,
      date_of_birth : dob, 
    }).then(()=>{
      res.redirect('/');
    }).catch(e=>{
      res.status(400).json(e);
    })
  });