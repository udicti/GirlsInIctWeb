const Parse = require('parse/node');
Parse.initialize('smartgirls', '');
Parse.serverURL = 'https://smartgirls-daas.bfast.fahamutech.com';

const AuthMiddleware = class {
    constructor() {
    }

    isAdmin(request, response, next) {
        const cookie = request.cookies;
        if (cookie && cookie.uid) {
            verifyId(cookie.uid).then(user => {
                request.admin = user;
                next();
            }).catch(_ => {
                console.log(_);
                response.redirect('/login');
            })
        } else {
            console.log('no cookie');
            response.redirect('/login');
        }
    }

    /**
     *
     * @param username {string}
     * @param password {string}
     * @returns {Promise<>}
     */
    static async userLogin(username, password) {
        try {
            return await Parse.User.logIn(username, password);
        } catch (e) {
            throw e;
        }
    }
};

/**
 *
 * @param uid {string}
 * @returns {Promise<>}
 */
async function verifyId(uid) {
    try {
        const query = new Parse.Query('_User');
        const response = await query.get(uid);
        const user = response.toJSON();
        if (!user) {
            throw 'No such user';
        }
        if (user.role === 'admin') {
            return user;
        } else {
            throw 'User is not admin';
        }
    } catch (e) {
        throw e;
    }
}


module.exports.AuthMiddleware = AuthMiddleware;
