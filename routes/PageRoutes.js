const express = require('express')
const path = require('path')
var router = express.Router()

router.use(express.static('../public'))

router.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../view/index.html'))
})

router.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../view/index.html'))
})

router.get('/education',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../view/education.html'))
})

router.get('/projects',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../view/Projects.html'))
})


module.exports = router