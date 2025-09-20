// middleware/auth.js
const jwt=require("jsonwebtoken");
module.exports=(req,res,next)=>{const token=req.header("Authorization");try{req.user=jwt.verify(token.replace("Bearer ",""),"secret");next();}catch{res.status(401).send();}};