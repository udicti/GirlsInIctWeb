const AppBar = () => {
    return `
    <div class="app-bar">
        <span class="app-bar-brand">SmartGirls</span>
        <span style="flex-grow: 1"></span>
        <div>
            <a href="#" class="app-bar-item">About</a>
            <a class="app-bar-item">Team</a>
            <a class="app-bar-item">Resources</a>
            <a class="app-bar-item">News & Events</a>
        </div>
    </div>
    `
};

module.exports.AppBar = AppBar;
