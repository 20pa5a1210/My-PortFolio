const express = require('express')
const path = require('path')
const PageRoute = require('./routes/PageRoutes')
const app = express()

const port = process.env.PORT || 5000


app.use(express.static('./public'))


app.use('',PageRoute)

app.listen(port,(req,res)=>{
    console.log('Server Up And Running');
})