const express = require('express')
const PageRoute = require('./routes/PageRoutes')
const app = express()

app.use(express.static('./public'))

app.use('',PageRoute)

app.listen(9090,(req,res)=>{
    console.log('Server Up And Running');
})