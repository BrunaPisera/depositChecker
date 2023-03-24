const express = require('express');
//allow to expose endpoints through a server application
const app = express();
const routes = require('./routes/depositRoute')(app)
const port = 8081;

app.listen(port, (error)=>{
    if(!error) console.log(`server is running on port ${port}`)
    else console.log(`there was an error ${error}`)
})