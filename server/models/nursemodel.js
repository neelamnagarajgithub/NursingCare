const mongoose=require('mongoose');

const NurseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter your name'],
    },
})

const Nurse=new mongoose.model('Nurse',NurseSchema);

module.exports=Nurse;