const {mongoose,MongooseSchema} = require("./../database/connection");



const UserSchema = new MongooseSchema({
   name:{
       type:String,
   },
   email:{
       type:String,
   },
   googleId:{
       type:String
   }
});

const User = mongoose.model("users",UserSchema);

module.exports = User;


