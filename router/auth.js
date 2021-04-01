const express= require('express');
const router = express.Router();
const authController = require('../controller/auth');


router.post("/adminregister",(req,res)=>{
    res.send(req.body);
});
router.post("/adminlogin",(req,res)=>{
    res.send(req.body);
});
module.exports=router;
