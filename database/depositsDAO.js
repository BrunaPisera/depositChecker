module.exports = () => {
    
    this.getAllDeposits = async (pool) => {
        await pool.query("select * from deposits", (error, response) => {
            console.log(`Database Response Length: ${response.rows.length}`)
            pool.end();
            return response.rows
        })
    }

    return this
}