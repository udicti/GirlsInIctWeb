const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, './public')));

router.get('/', (request, response)=>{
    response.send(`
    <html>
        <head>
            <title>SmartGirl</title>
            <link href="/style.css" rel="stylesheet"/>
        </head>

        <body>
            <div class="container">
                ${getText('Hello, Josh')}
            </div>
        </body>
    </html>`
    )}
);

app.use('/', router)

exports.ui = {
    path: '/',
    onRequest: app
}

function getText(message){
    return `
    <span>${message}</span>
    `
}

