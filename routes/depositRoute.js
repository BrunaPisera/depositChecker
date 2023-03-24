module.exports = function routes(app){
    app.get('/deposit', (request, response) => {
        console.log('I was accessed')
        response.send('Brunaaa')
    })
}