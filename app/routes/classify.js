var express = require('express');
var router = express.Router();

var Classify = require('../model/classify')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/',async(req,res)=>{
    let title = req.body.title;
    let classify = new Classify({
        title
    })
    try{
        await classify.save();
        let result=await Classify.find();
        res.send(result);
    }
    catch(err){
       res.send("msg:参数错误");
    }
})

router.get('/',async(req,res)=>{
    try {
      let result=await Classify.find();
      res.send(result);
    } catch (error) {
      res.send("msg:参数错误");
    }
})

router.delete('/',async(req,res)=>{
  let id=req.query.id;
  console.log(id)
  Classify.remove({"_id" : id},function(err,result){
    if(err) console.log(err)
    else{
      console.log(result)
       res.send(result)
    }
});
})

module.exports = router;
