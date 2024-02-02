const mongoose=require('mongoose');
const validator=require('validator');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please provide you name'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        lowercase:true,
        validator:[validator.isEmail,'Please provide a valid email'],
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
    },
    passwordConfm:{
        type:String,
        required:[true,'Please re_enter the password'],
        validate:{
         validator:  function(el ) {
            return this.password===el;
         },
         message:"please recheck the passwords"
        }
    }
})

const user=new mongoose.model('User',UserSchema);

module.exports=user;