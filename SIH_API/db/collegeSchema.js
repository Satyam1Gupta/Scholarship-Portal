const mongoose=require('mongoose');
const collegeSchema=new mongoose.Schema({
    college_name:{
        type:String,
        require:true
    },
    yearOfGrad:{
        type:String,
        require:true
    },
    first_name:{
        type:String,
        require:true
    },

    last_name:{
        type:String,
        require:true
    },

    tenth_cgpa:{
        type:String,
        require:true
    },

    twelfth_cgpa:{
        type:String,
        require:true
    },
    stateOfresidence:{
        type: String,
        required: true
    },

    grad_cgpa:{
        type:String,
        require:true
    }
  

})
module.exports=mongoose.model('college',collegeSchema);
