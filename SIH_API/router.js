const express= require("express");
const router=express.Router();
//const http = require('http');

const aadhaarUser=require("./db/aadhaarSchema");
const cbseTenth=require("./db/cbse10markSchema");
const cbse12=require("./db/cbse12markSchema");
const itrUser=require("./db/itrSchema");
const assamtenth=require("./db/assam10markSchema");
const assam12th=require("./db/assam12markSchema");
const college=require("./db/collegeSchema");
router.get('/', (req, res) => {
    res.send('Hello World! from router api')
  });


 router.get('/api/aadhaar',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const aUser=await aadhaarUser.find({});
 
         res.status(201).send(aUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })
  router.get('/api/cbse10',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const cUser=await cbseTenth.find({});
 
         res.status(201).send(cUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })
  router.get('/api/cbse12',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const cbUser=await cbse12.find({});
 
         res.status(201).send(cbUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })
  router.get('/api/itr',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const rUser=await itrUser.find({});
 
         res.status(201).send(rUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })
 
  router.get('/api/assam10',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const iUser=await assamtenth.find({});
 
         res.status(201).send(iUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })
  router.get('/api/assam12',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const asUser=await assam12th.find({});
 
         res.status(201).send(asUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })
  router.get('/api/college',async(req,res)=>{
    // res.setHeader('Content-Type', 'application/json');
     res.setHeader("Access-Control-Allow-Origin", "*");
     try{
         const asUser=await college.find({});
 
         res.status(201).send(asUser)
        
      }catch(err){
          res.status(400).send(err)
      }
  })

  module.exports=router;