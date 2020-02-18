const {MeetTeam} = require("./meet-team");
const {AppBar,HeaderIntro, Footer} = require("../common");

/**
 * Header view
 * @returns {string}
 * @constructor
 */
const Header = () => {
    return `
        ${AppBar()}
        ${HeaderIntro()}
    `
};

/**
 * Landing page view
 * @returns {string}
 * @constructor
 */
const Landing = () => {
    return `
        ${Header()}
        ${MeetTeam()}
        ${Footer()}
    `
};

module.exports.Landing = Landing;
