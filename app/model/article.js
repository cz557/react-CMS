let mongoose = require('../core/db');

let Schema = mongoose.Schema;

let article = new Schema({
    title:String,
    author:String,
    desc:String,
    content:String,
    date:{type:Date,default:new Date()},
    imgUrl:{type:String,default:"http://127.0.0.1:3000/images/photo4.jpg"}
})

let ArticleModel =  mongoose.model("article",article)
module.exports = ArticleModel;