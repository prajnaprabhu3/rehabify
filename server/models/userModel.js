const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
username: {
    type:String,
    required:true,
    min:3,
    max:15,
    unique:true,
},
    email: {
    type:String,
    required:true,
    unique:true,
},
    password: {
    type:String,
    required:true,
    max:50
}
})

module.exports=mongoose.model("User",userSchema);