const express = require('express');
const {Landing} = require("../ui/landing");
const homeRouter = express.Router();

homeRouter.get('/', (request, response) => {
    response.send(`
        <!Doctype>
        <html lang="en">
           <head>
               <title>SmartGirl</title>
               <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet">
               <link rel="stylesheet" href="/style.css">
           </head>
           <body>
                ${Landing()}
            </body>
        </html>
    `)
});

module.exports = homeRouter;
