let mongoose=require('../core/db');

let Schema = mongoose.Schema;

let classify = new Schema({
    title:String
})

let classifyModel = mongoose.model("classify",classify)

module.exports = classifyModel;