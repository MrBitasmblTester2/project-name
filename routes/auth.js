// routes/auth.js
const express=require("express");
const jwt=require("jsonwebtoken");
const router=express.Router();
router.post("/login",(req,res)=>{/* validate user */res.json({token:jwt.sign({id:1},"secret")});});
module.exports=router;