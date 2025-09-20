// routes/tasks.js
const express=require("express");
const router=express.Router();
let tasks=[]; // in-memory
router.use(require("../middleware/auth"));
router.post("/",(req,res)=>{/* create task */});
router.get("/",(req,res)=>{/* return tasks sorted by priority */});
module.exports=router;