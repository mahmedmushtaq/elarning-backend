const {mongoose,MongooseSchema}  = require("../database/connection");

const classSchema = new MongooseSchema({
    name:{
       type:String,
    },
    creatorId:{
        type:String,
    },

    joiningcode:{
        type:String,
    },
    createdAt:{
        type:Date
    }



});

const joiningSchema = new MongooseSchema({
   name:{
       type:String
   },
   joiningClassId:{
       type:String,
   },
   joiningcode:{
       type:String,
   },
   joiningUserId:{
       type:String,
   },
   joiningDate:{
       type:Date
    }
});

const classModel  = mongoose.model("classes",classSchema);
const joiningClassModel = mongoose.model("joining_classes",joiningSchema);


module.exports = {
    classModel,
    joiningClassModel,
    mongoose
};