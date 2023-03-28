const {Pool} = require('pg');

module.exports = function connection (){
    return new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: '5432'
    })
    
  
    // pool.query('select * from deposits-ms.deposits', (error, response) => {
    //     console.log(error, response)
    //     pool.end();
    // })
}