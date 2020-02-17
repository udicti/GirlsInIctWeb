const {AppBar} = require("./common");

const Header = () => {
    return `
        ${AppBar()}
        <div style="height: 500px;">
            
        </div>
    `
};

const Landing = () => {
    return `
        ${Header()}
    `
};

module.exports.Landing = Landing;
