const { db } = require("./dbconfig");

exports.update = async (req, res) => {
  const id = parseInt(req.query.id);
  await db
    .select("*")
    .from("project")
    .where("project_id", id)
    .then((data) => {
        db.select("*")
      .from("project")
      .then((cat)=>{
          res.render("updatepro", { data: data, id: id});
        })
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.updatedata=(async(req,res)=>{
    let proid=parseInt(req.query.id);
    console.log(pid);
    const proname = req.body.proname;
    const prolead = req.body.prolead;
    const sdate = req.body.sdate;
    const edate = req.body.edate;
    db('project')
    .where('project_id', '=',proid)
    .update({
      projectname: proname,
      projectlead: prolead,
      project_start_date : sdate,
      project_end_date : edate,   
    }).then(()=>{
      res.redirect('/');
    }).catch(e=>{
      res.status(400).json(e);
    })
  });