const express = require('express')
const router =express.Router()
const user=require('../models/user')

router.get('/',async(req,res)=>{
    console.log("get request")
    const users = await user.find()
    res.json(users)
})

router.get('/:id',async(req,res)=>{
    console.log("get request")
    const user1 = await user.findById(req.params.id)
    res.json(user1)
})

router.post('/',async(req,res)=>{
    console.log("post request")
    const user1 = new user({
        name:req.body.name,
        city:req.body.city
    })
    try{
    const r1 = await user1.save()
    res.json(r1)

    }catch(err){
        res.send(err)

        console.log("error")
    }
})

router.patch('/:id',async(req,res)=>{
    console.log("update request")
    const user1 = await user.findById(req.params.id)
    user1.name = req.body.name
    user1.city = req.body.city
    const a1 = await user1.save()
    res.json(a1)
})

router.delete('/:id',async(req,res)=>{
    console.log("delete request")
    const user1 = await user.findById(req.params.id)
    
    const a1 = await user1.delete()
    res.send("deleted successfully")
})

module.exports= router