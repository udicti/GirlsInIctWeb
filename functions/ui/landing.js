const {AppBar, Footer} = require("./common");

const Header = () => {
    return `
        ${AppBar()}
    `
};

const Landing = () => {
    return `
        ${Header()}
        ${Footer()}
    `
};

module.exports.Landing = Landing;
