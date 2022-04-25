var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
router.get('/',function(req,res,next){
    res.send("this is admin dashboard");
});


router.get('/student',function(req,res,next){
    res.send("list of student");
});

router.get('/teacher',function(req,res,next){
    res.send("list of teacher");
});

router.get('/student/:sid',function(req,res,next){
    res.send("information about specific student");
});

router.get('/class/:cid',function(req,res,next){
    res.send("information about specific student");
});


router.get('/teacher/:tid',function(req,res,next){
    res.send("information about specific student");
});


///////////////POST ROUTERS///////////////////

router.post('/addteacher',function(req,res,next){
    res.send("adding a teacher");
});

router.post('/addstudent',function(req,res,next){
    res.send("adding a teacher");
});

router.post('/addclass',function(req,res,next){
    res.send("adding a teacher");
});



/////////////////////put routes/////////////////////

router.put('/editteacher/:tid', function(req,res,next){
    res.send('editing a teacher');
});

router.put('/editstudent/:sid', function(req,res,next){
    res.send('editing a teacher');
});

router.put('/editclass/:cid', function(req,res,next){
    res.send('editing a teacher');
});

router.put('/assignteacher/:tid/:cid', function(req,res,next){
    res.send('editing a teacher');
});

router.put('/assignstudent/:sid/:cid', function(req,res,next){
    res.send('editing a teacher');
});

router.put('/assignstudent/:sid/:cid',function(req,res,next){
    Class.findOneAndUpdate({_id:req.params.cid},
        {
            "$push"
        }
    })

});


//////////////delete/////////////////////////

router.delete('/class/:cid',function(req,res,next){
    res.send('deleting a class');
});

router.delete('/teacher/:cid',function(req,res,next){
    res.send('deleting a class');
});

router.delete('/student/:cid',function(req,res,next){
    res.send('deleting a class');
});

module.exports= router