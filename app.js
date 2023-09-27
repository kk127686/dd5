const express=require("express");
const mysql=require("mysql");
var app=express();//连接数据库
const mysqlOptions={
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
}
var db=mysql.createConnection(mysqlOptions);
app.get("/",function(req,res){
	res.send({"code":200,"msg":"Hello,world"});
});
app.get("/list",function(req,res){
	db.query("SELECT * FROM students",function(err,data){
		if(err){
	    		res.send(err)
		}else{
	    		res.send(data);
		}
	})
});
app.listen(8080);
