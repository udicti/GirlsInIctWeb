const {NewsAndEvents} = require("./news-events");
const {MeetTeam} = require("./meet-team");
const {AppBar, HeaderIntro, Footer} = require("../common");


/**
 * Landing page view
 * @returns {string}
 * @constructor
 */
const Landing = () => {
    return `
        ${AppBar()}
        ${HeaderIntro()}
        ${NewsAndEvents()}
        ${MeetTeam()}
        ${Footer()}
    `
};

module.exports.Landing = Landing;
