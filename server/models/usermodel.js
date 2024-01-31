const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter your name'],
    },
})

const user=new mongoose.model('User',UserSchema);

module.exports=user;