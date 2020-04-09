const User = require("../models/User");

const createNewUser = dataArgs=>{
   return new Promise((resolve,reject)=>{
       User.findOne({email:dataArgs.email}).then((data)=>{
           console.log(data);
           if(data) {
              return resolve({
                  id:data._id.toString()
              });
           }
           else{
               const user = new User({
                   name:dataArgs.name,
                   email:dataArgs.email,
                   googleId: dataArgs.googleId,
               })
               user.save().then((res)=>{

                   resolve({
                       id:res._id.toString()
                   });

               }).catch(err=>{

                   reject(err);

               })
           }
       })

   })
}

module.exports = createNewUser;