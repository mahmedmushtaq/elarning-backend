const router = require("express").Router();
const createNewUser = require("../services/newUser");

router.post("/",async (req,res,next)=>{

    createNewUser(req.body).then((result)=>{
        res.send(result);
    }).catch(err=>{
        next(err);
    })
});

router.get("/",async (req,res,next)=>{

    createNewUser({name:"M Ahmed",email:"test2343@gmail.com",googleId:"23ljsddf"}).then((result)=>{
        res.send(result);
    }).catch(err=>{
        next(err);
    })
});

module.exports = router;