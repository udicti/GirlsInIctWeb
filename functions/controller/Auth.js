const Parse = require('parse/node');
Parse.initialize('smartgirls', '');
Parse.serverURL = 'https://smartgirls-daas.bfast.fahamutech.com';

const AuthMiddleware = class {
    constructor() {
    }

    isAdmin(request, response, next) {
        const user =  Parse.User.signUp('','',{
            role:'admin'
        }).then(function (value) {

        });
        // user.setUsername('user1');
        // user.setPassword('user1');
        // user.
        const cookie = request.cookies;
        console.log(cookie);
        if (cookie && cookie.uid) {
            next();
            verifyId(cookie.uid).then(_ => {
                next();
            }).catch(_ => {
                response.redirect('/login');
            })
        } else {
            response.redirect('/login');
        }
    }
};

/**
 *
 * @param uid {string}
 * @returns {Promise<void>}
 */
async function verifyId(uid) {
    try {
       // const user = await Parse.User.logIn("admin", "admin");
        throw 'I do know you'
    } catch (e) {
        throw e;
    }
}

module.exports.AuthMiddleware = AuthMiddleware;
