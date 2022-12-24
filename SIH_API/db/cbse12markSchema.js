const mongoose=require('mongoose');
const cbse12markSchema=new mongoose.Schema({
    rollno:{
        type:String,
        require:true
    },

    year:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    result:{
        type:String,
        require:true
    },
    cgpa_percentage:{
        type:String,
        require:true
    }
  })
module.exports=mongoose.model('cbse_12marksheet',cbse12markSchema);
