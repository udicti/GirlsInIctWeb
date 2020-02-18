const AppBar = () => {
    return `
<!--    <div class="app-bar">-->
<!--        <span class="app-bar-brand">SmartGirls</span>-->
<!--        <span style="flex-grow: 1"></span>-->
<!--        <div>-->
<!--            <a href="#" class="app-bar-item">About</a>-->
<!--            <a class="app-bar-item">Team</a>-->
<!--            <a class="app-bar-item">Resources</a>-->
<!--            <a class="app-bar-item">News & Events</a>-->
<!--        </div>-->
<!--    </div>-->
<nav class="navbar navbar-expand-lg navbar-light bg-light app-bar">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link app-bar-brand" href="#">SmartGirls <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    `
};

const HeaderIntro = () => {
    return `
   
    <div class="headerIntro"> 
    <div class="header-text">
        <h1>SMART GIRLS IN ICT</h1>
        <p>Supporting and Empowering Girls and young women in ICT movement </p>
        <a href="#">SEE OUR ACTIVITIES</a></div>
    </div>
    
    `
};

const Footer = () => {
    return `
    <div> I am a footer </div>
    `
};

module.exports.HeaderIntro = HeaderIntro;
module.exports.Footer = Footer;
module.exports.AppBar = AppBar;
