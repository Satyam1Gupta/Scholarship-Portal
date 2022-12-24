const mongoose=require('mongoose');
const Aadhaarschema=new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },

    last_name:{
        type:String,
        require:true
    },
    Phone_number:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    aadhaar_no:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    aadhar_file :{
        type:String,
        require:true
    }
  },{timestamps:true})
const Aadhar_regi=mongoose.model('aadhaar',Aadhaarschema);
module.exports=Aadhar_regi;