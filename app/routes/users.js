var express = require('express');
var router = express.Router();

var ObjectID = require('mongodb').ObjectID;

var Articles = require('../model/article')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Articles.find((err,result)=>{
      if(err)console.log(err)
      else{
        res.send(result)
      }
  })
});

router.post('/uploadImg',(req,res)=>{
    let imgUrl=req.files;
    res.send({imgUrl:"http://127.0.0.1:3000/images/"+imgUrl[0].filename})
    console.log(imgUrl)
})

router.post('/',(req,res)=>{
   let {title,author,desc,content,imgUrl} = req.body;
   if(!imgUrl){
     imgUrl='http://127.0.0.1:3000/images/photo4.jpg';
   }
  console.log(req.body)
   let article = new Articles({
     title,author,desc,content,imgUrl
   });
   article.save((err,result)=>{
       if(err) {console.log(err)}
       else{
          res.send(result);
       }
   })
})

router.get('/delete',(req,res)=>{
    let id=req.query.id;
    console.log(id)
    id=ObjectID(id)
    Articles.remove({"_id" : id},function(err,result){
        if(err) console.log(err)
        else{
           res.send(result)
        }
    });
    console.log(id)
})


//单篇文章内容
router.get('/getArtDetail',async(req,res)=>{
    let id=req.query.id;
    console.log(id)
    let result=await Articles.findById(id)
    res.send(result)
    
})

//更新文章内容
router.put('/',async(req,res)=>{
  let {id,title,author,desc,content,imgUrl}=req.body;
  let result=await Articles.findByIdAndUpdate(id,{
    title,author,desc,content,imgUrl
  })
  res.send(result)
})

module.exports = router;
