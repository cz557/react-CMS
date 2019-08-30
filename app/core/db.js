//加载mongoose
let mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment')
mongoose.set('useFindAndModify', false)
//数据库连接地址：
const  URL = "mongodb://localhost:27017/1903";

mongoose.connect(URL,{
	useCreateIndex: true,
	useNewUrlParser: true,
	promiseLibrary: global.Promise
});

mongoose.connection.on('connected',function(){
	
	console.log('数据库连接成功!',URL)
})

mongoose.connection.on('error',function(err){
	console.log('连接错误',err)
})

mongoose.connection.on('disconnected',function(){
	console.log('连接断开。。。')
})

// 自增 ID 初始化
// autoIncrement.initialize(mongoose.connection)

module.exports = mongoose;