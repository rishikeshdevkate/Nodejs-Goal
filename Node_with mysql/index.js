const mysql =require('mysql');

const express = require('express');
var app =express();
const bodyparser= require('body-parser')

app.use(bodyparser.json());
var mysqlConnection =mysql.createConnection({
    host:'localhost',
    user:'ROOT_USER',
    password:'ROOT_USER',
    database:'RVD'
});

mysqlConnection.connect((err)=>
{
if(!err)
console.log('Success');
else
console.log('err'+ JSON.stringify(err,undefined,2));
});

app.listen(8005, ()=>console.log("running"));

app.get('/user',(req,res)=>{
mysqlConnection.query('SELECT * FROM User',(err,rows,fields)=>{
    if(!err)
    res.send(rows)
    else
    console.log(err)

})
});


app.post('/addUser',(req,res)=>{
    var first_name= req.body.first_name;
    var second_name = req.body.second_name;
    var email = req.body.email;

mysqlConnection.query("insert into User values('"+email+"','"+first_name+"','"+second_name+"')",(err,rows,fields)=>{
    if(!err)
    res.send({"insert":"success"});
    else
    res.send({"insert":err});

})
});

app.patch('/updateUser',(req,res)=>{
    var first_name= req.body.first_name;
    var second_name = req.body.second_name;
    var email = req.body.email;

mysqlConnection.query("UPDATE User SET first_name = '"+first_name+"', second_name = '"+second_name+"' WHERE email='"+email+"'",(err,rows,fields)=>{
    if(!err)
    res.send({"update":"success"});
    else
    res.send({"update":err});

})
});


app.post('/deleteUser',(req,res)=>{
    var first_name= req.body.first_name;
    var second_name = req.body.second_name;
    var email = req.body.email;

mysqlConnection.query("delete from User where email='"+email+"'",(err,rows,fields)=>{
    if(!err)
    res.send({"delete":"success"});
    else
    res.send({"delete":err});

})
});