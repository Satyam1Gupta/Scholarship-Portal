const mongoose=require('mongoose');
const assam10markSchema=new mongoose.Schema({
    roll:{
        type:String,
        require:true
    },

    year:{
        type:String,
        require:true
    },
    no:{
        type:String,
        require:true
    },
    name:{
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
    },
   
  })
module.exports=mongoose.model('assam_10marksheet',assam10markSchema);
