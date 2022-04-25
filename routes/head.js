var express=require("express");
var router=express.Router();

//Get routes
router.get("/", (req, res, next)=>{
    res.send("This is head dashboard");
});

module.exports=router;