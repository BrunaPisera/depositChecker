const connectionPool = require('../database/dbConnection')()
const depositsDAO = require('../database/depositsDAO')()

module.exports = function routes(app){
    app.get('/deposit', async (request, response) => {
        console.log(connectionPool)
        connectionPool.query("SET search_path TO 'DEPOSITS-MS';")

        const rows = await depositsDAO.getAllDeposits(connectionPool)

        console.log('Banana')
        response.send('Brunaaa')
    })
}