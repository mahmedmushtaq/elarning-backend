const mongoose = require("mongoose");


// const uri = "mongodb+srv://testuser:shine123@cluster0-zhtwr.mongodb.net/test?retryWrites=true&w=majority";
// const uri = "mongodb+srv://testuser:shine123@cluster0-zhtwr.mongodb.net/test?retryWrites=true&w=majority";
const uri = "mongodb+srv://testuser:shine123@cluster0-zhtwr.mongodb.net/elearning?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true  }).then(()=>{

}).catch(err=>{
    console.log("error occur "+err.toString());
});



module.exports = {
    mongoose,
    MongooseSchema:mongoose.Schema
}