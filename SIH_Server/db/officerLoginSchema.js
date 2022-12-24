const mongoose=require('mongoose');
const olSchema=new mongoose.Schema({
    Username:{
        type:String,
        require:true
    },

    Password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('officer',olSchema);
