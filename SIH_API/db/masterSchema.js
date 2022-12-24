const mongoose=require('mongoose');
const masterSchema=new mongoose.Schema({
    appNoEntExm:{
        type:String,
        require:true
    },
    markScored:{
        type:String,
        require:true
    },
    countAllotInst:{
        type:String,
        require:true
    },

    ackNo:{
        type:String,
        require:true
    }
  

})
module.exports=mongoose.model('master',masterSchema);
