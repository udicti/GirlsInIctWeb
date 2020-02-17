// Create and Deploy Your First BFast Function


exports.helloWorld = {
    path: '/hello',
    onRequest: (request, response) => {
        response.send("Hello from SmartGirls!");
    }
};
