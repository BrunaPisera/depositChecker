const connectionPool = require('../database/dbConnection')()
const depositsDAO = require('../database/depositsDAO')()

module.exports = function routes(app){
    app.get('/deposit', (httpRequest, httpResponse) => {
        console.log("Teste");
        return httpResponse.status(200).send()
        // // Dealing with promise
        // depositsDAO.getAllDeposits(connectionPool)
        //     .then((result) => {
        //         console.log(`Response from Promise: ${result}`)
               
        //         return httpResponse.status(200).send({total: result.rows.length})
        //     }).catch((error) => {
        //         httpResponse.status(500).send(`There was an error performing the statement: ${error}`)
        //     })

    })
}