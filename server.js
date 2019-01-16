const express=require('express')
const app=express()
const path = require('path')
const api = require('./backend/route/api')
const cors = require("cors")


app.use('/',express.static('frontend/build'))
app.use(cors())
app.use('/api', api);


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen(8080)

