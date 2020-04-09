const {classModel,joiningClassModel,mongoose} = require("../models/ClassModel");


const createNewClass = (data)=>{
     return new Promise((resolve,reject)=>{
         const newClass = classModel({
            name:data.name,
            joiningcode:data.code,
             createdAt:data.date,
             creatorId:data.id
         });

         newClass.save().then(result=>{
             resolve({
                 id:result._id.toString(),
             });

         }).catch(err=>{
             reject(err);
         })
     })
}

const joiningNewClass = (data)=>{
    return new Promise((resolve,reject)=>{
        classModel.findOne({
            joiningcode:data.joiningCode
        }).then(qData=>{
            if(!qData){
                return reject("Incorrect Joining Code");
            }


            const id = qData._id.toString();
            const name = qData.name;
            const joiningClass = joiningClassModel({
                name:name,
                joiningClassId:id,
                joiningcode:data.joiningCode,
                joiningUserId:data.id,
                joiningDate:data.date

            });

            joiningClass.save().then(()=>{
                resolve();

            }).catch(err=>{
                reject(err);
            })

        }).catch(qErr=>{

        })

    })
}


const joinedClassesList = (id)=>{
    return new Promise((resolve,reject)=>{
        joiningClassModel.find({joiningUserId:id}).then(qData=>{

            if(qData.length === 0){
                console.log(qData);
                return reject("No Class is found");
            }

            resolve(qData);
        }).catch(qErr=>{

        })

    })

}

const createdClassesList = (id)=>{
    return new Promise((resolve,reject)=>{
        classModel.find({creatorId:id}).then(qData=>{
            if(qData.length === 0){
                return reject("No Class is found");
            }

            resolve(qData);
        }).catch(qErr=>{

        })

    })

}

const checkUserCreatedClass = (classId,id)=>{
    return new Promise((resolve,reject)=>{
        classModel.findOne({$and: [{_id:mongoose.Types.ObjectId(classId)},{creatorId:id}]}).then(doc=>{
            if(!doc){
                return reject("No Record is found");
            }
            resolve(doc);
        }).catch(err=>{
            reject(err);
        });
    })
}





module.exports = {
    createNewClass,
    joiningNewClass,
    joinedClassesList,
    createdClassesList,
    checkUserCreatedClass
}