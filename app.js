const express = require('express');

//allow to expose endpoints through a server application
const app = express();
const PORT = 8081;

const routes = require('./routes/depositRoute')(app)
const eurekaHelper = require('./configuration/eureka-helper');

app.listen(PORT, (error)=>{
    if(!error) console.log(`server is running on port ${PORT}`)
    else console.log(`there was an error ${error}`)
})

eurekaHelper.registerWithEureka('deposit-checker', PORT);