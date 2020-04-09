const router = require("express").Router();
const randomstring = require("randomstring");
const {createNewClass,joiningNewClass,
    joinedClassesList,createdClassesList,
  checkUserCreatedClass} = require("../services/classServices");

router.post("/new",async (req,res,next)=>{
  const joiningCode = randomstring.generate(9);
  const date = Date.now();
  createNewClass({
      name:req.body.name,
      code:joiningCode,
      id:req.body.id,
      date:date

  }).then(result=>{
      res.send({message:"class created Successfully",joiningCode:joiningCode});
  }).catch(err=>{
      next(err);
  })


})

router.post("/join",async (req,res,next)=>{
   const date = Date.now();

   joiningNewClass({

       joiningCode:req.body.joiningCode,
       id:req.body.id,
       date:date
   }).then(()=>{
       res.send("You have joined the class successfully. Please go to the joined classes list");
   }).catch((err)=>{
       next(err);
   })
});

router.get("/joined-list/:id",async (req,res,next)=>{

     joinedClassesList(req.params.id).then(result=>{

         res.send(JSON.stringify(result));
     }).catch(err=>{
         next(err);
     })
});

router.get("/created-list/:id",async (req,res,next)=>{
    createdClassesList(req.params.id).then(result=>{
        res.send(JSON.stringify(result));
    }).catch(err=>{
        next(err);
    })
});

router.get("/check-class/:classId/:userId",async (req,res,next)=>{
    console.log(req.params);
   checkUserCreatedClass(req.params.classId,req.params.userId)
       .then(result=>{

           res.send(result);
       }).catch(err=>{
           next(err);
   })
});



module.exports = router;