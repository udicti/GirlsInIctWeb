const {NewsAndEvents} = require("./news-events");
const {MeetTeam} = require("./meet-team");
const {WhatWeDo} = require("./what-we-do");
const {AppBar, HeaderIntro, Footer} = require("../common");

/**
 * Landing page view
 * @returns {string}
 * @constructor
 */
const Landing = (articleData) => {
    return `
        ${AppBar()}
        ${HeaderIntro()}
        ${WhatWeDo()}
        ${NewsAndEvents(articleData)}
        ${MeetTeam()}
        ${Footer()}
    `
};

module.exports.Landing = Landing;
