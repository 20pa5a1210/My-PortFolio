const express = require('express')
const path = require('path')
// const PageRoute = require('./routes/PageRoutes')
const app = express()

app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/index.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/index.html'))
})

app.get('/education',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/education.html'))
})

app.get('/projects',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./view/Projects.html'))
})

// app.use('',PageRoute)

app.listen(9090,(req,res)=>{
    console.log('Server Up And Running');
})