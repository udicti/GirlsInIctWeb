
exports.resourceStyle = {
    path: '/public/style', 
    onRequest: (request, response)=>{
        response.set('conten-type','text/css');
        response.send(`
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        `)
    }
}
