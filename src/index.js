const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const {error,sendError} = require("./api/middlewares/errorhandling");
const bodyParser = require("body-parser");



const app = express();
//  ========================== ALL LIBRARIES MIDDLEWARE ===================
 app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());


// =========================== ALL ROUTERS =================================

app.use("/registration",require("./api/registration"));
app.use("/class",require("./api/class"));



// ============================ GENERAL  ==============================

app.get("/home",async (req,res)=>{
     res.send("Started successfully");
});





// =========================== HANDLING ERROR AND SERVER  ===================
app.use(error);
app.use(sendError);
app.listen(config.port,()=>{
    console.log("Server is listening on a port "+config.port);
});





