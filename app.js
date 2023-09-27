// const express=require("express");
// const mysql=require("mysql");
// var app=express();//连接数据库
// var db=mysql.createConnection({host: process.env.MYSQL_HOST,
// port: process.env.MYSQL_PORT,
// user: process.env.MYSQL_USER,
// password: process.env.MYSQL_PASSWORD,
// database: process.env.MYSQL_DATABASE
// });

// app.get("/",function(req,res){
// 	//2.发送请求(查询)
// 	db.query("SELECT * FROM students",function(err,data){
// 		if(err){
// 			console.log("数据库访问出错",err);
// 		}else{
// 			console.log(data);
// 		}
// 	})
// 	res.send("express");
// });
// app.listen(8080);


const mongoose = require('mongoose')
const options = {
    db_user: "mongo",//添加的普通账户名
    db_pwd: "2oH7V3F0G1X9",
    db_host: "sfo1.clusters.zeabur.com",
    db_port: 30884,
    db_name: "chatRead"//数据库名称
};
//连接mogoose服务,注意字母的区别
const dbURL = `mongodb://${options.db_user}:${options.db_pwd}@${options.db_host}:${options.db_port}/${options.db_name}?authSource=admin`
//通过数据库连接句柄，监听mongoose数据库成功的事件
mongoose.connect(dbURL)
// mongoose.connect("mongodb://mongo:2oH7V3F0G1X9@sfo1.clusters.zeabur.com:30884/chatRead");// 连接数据库
// 得到数据库连接句柄
let db = mongoose.connection;
//设置回调
db.once('open', (err) => {
    if (err) {
        error()
    }
    console.log(7777)
})
db.on('clsoe', () => { console.log('连接关闭') })