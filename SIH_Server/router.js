const express= require("express");
const router=express.Router();


const User=require("./db/regiSchema");
const office=require("./db/officerLoginSchema");
router.get('/', (req, res) => {
    res.send('Hello World! from router')
  });


  router.post('/Registration',(req,res)=>{ 
   
    const{first_name,last_name,phone_number,phone_otp,email,email_otp,dob,gender,country,category,id_name,
        id_no,ac_no,ifsc_no,street_address,city,state,postal_code,password,cpassword}=req.body;//object destructuring
        
    if(!first_name || !last_name||!phone_number||!email){
        return res.status(422).json({error:"plz fill all the fields"})
    }
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
        return res.status(409).json({error:"email existed"});
        }
        const user=new User({first_name,last_name,phone_number,phone_otp,email,email_otp,dob,gender,country,category,id_name,id_no,ac_no,ifsc_no,street_address,city,state,postal_code,password,cpassword})
    user.save().then(()=>{
        res.status(201).json({message:"user registered successfull"});
    }).catch((err)=>res.status(500).json({error:"failed to register"}))
    }).catch(err=>{console.log(err);})  
  })


  router.get('/Login',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
    
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const user=await User.find({});
 
         res.status(201).send(user)
     
      }catch(err){
          res.status(400).send(err)
         
      }
  })

  router.get("/OfficerLogin", async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    try{
        const offuser=await office.find({});

        res.status(201).send(offuser)
    
     }catch(err){
         res.status(400).send(err)
        
     }
  })
  module.exports=router;