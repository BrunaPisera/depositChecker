module.exports = () => {
    
    this.getAllDeposits = async (pool) => {
        // Creating promise to deqal with async logic
        return new Promise((resolve, reject) => {
            pool.query("select * from deposits", (error, result) => {
                if(error) return reject (error)
                
                console.log(`Database Response Length: ${result.rows.length}`)
                
                resolve(result)
            })
        });
    }

    return this
}