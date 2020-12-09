const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost/rvd"

const app = express()  //used to start express


mongoose.connect(url, {useNewUrlParser:true}) //useNewUrlParser used to avoid warning during db connection

const con =mongoose.connection

con.on('open', ()=> {
    console.log("Connected.....s")
})

app.use(express.json())
const nameRouter=require('./routers/users')
app.use('/users',nameRouter)

app.listen(9000, () =>{
    console.log("server started.,")
})