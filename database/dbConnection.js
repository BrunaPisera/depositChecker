const {Pool} = require('pg');

const pool = undefined

module.exports = function connection (){
    // Adding Singleton pattern here
    if(!this.pool) {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: '1234',
            port: '5432'
        })
    }

    return this.pool
}