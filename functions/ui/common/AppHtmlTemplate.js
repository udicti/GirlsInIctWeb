/**
 *
 * @param content {string}
 * @returns {string}
 * @constructor
 */
const AppHtmlTemplate = (content) => {
    return (`
        <!Doctype>
        <html lang="en">
           <head>
               <title>SmartGirl</title>
               <link rel="stylesheet" href="/bootstrap4.css">
               <meta name="viewport" content="width=device-width, initial-scale=1">
               <link href="/roboto.css" rel="stylesheet">
               <link rel="stylesheet" href="/style.css">
               <link href="https://fonts.googleapis.com/icon?family=Material+Icons"  rel="stylesheet">
           </head>
           <style>
                html{
                    font-family: Roboto, sans-serif!important;
                }
                body{
                    font-family: Roboto, sans-serif!important;
                }
            </style>
           <body>
                ${content}
                <script src="/js/jquery.js"></script>
                <script src="/js/popper.js"></script>
                <script src="/js/bootstrap.js"></script>
                <script>
                 $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                  })
                </script>
            </body>
        </html>
    `)
};

module.exports.AppHtmlTemplate = AppHtmlTemplate;
