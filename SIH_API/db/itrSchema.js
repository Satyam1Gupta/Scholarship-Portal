const mongoose=require('mongoose');
const itrSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    e_akn:{
        type:String,
        require:true
    },
    pan_no:{
        type:String,
        require:true
    },
    net_income:{
        type:String,
        require:true
    }

})
module.exports=mongoose.model('itr',itrSchema);
