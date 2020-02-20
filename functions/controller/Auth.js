const Parse = require('parse/node');
Parse.initialize('smartgirls', '');
Parse.serverURL = 'https://smartgirls-daas.bfast.fahamutech.com';

const AuthMiddleware = class {
    constructor() {
    }

    isAdmin(request, response, next) {
        const cookie = request.cookies;
        if (cookie && cookie.uid) {
            next();
            // verifyId(cookie.uid).then(_ => {
            //     next();
            // }).catch(_ => {
            //     response.redirect('/login');
            // })
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
        throw 'I do know you'
    } catch (e) {
        throw e;
    }
}

module.exports.AuthMiddleware = AuthMiddleware;
