const express=require("express");
const mysql=require("mysql");
var app=express();//连接数据库
var db=mysql.createConnection({host: process.env.MYSQL_HOST,
port: process.env.MYSQL_PORT,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
database: process.env.MYSQL_DATABASE
});

app.get("/",function(req,res){
	//2.发送请求(查询)
	db.query("SELECT * FROM students",function(err,data){
		if(err){
			console.log("数据库访问出错",err);
            res.send(err)
		}else{
			console.log(data);
            res.send(data);
		}
	})
	res.send("express");
});
app.listen(8080);
