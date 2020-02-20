const AppBarAdmin = () => {
    return (`
        <nav class="navbar navbar-expand-lg navbar-light bg-light app-bar">
  <a class="navbar-brand app-bar-brand" href="#">SmartGirls <span class="sr-only">(current)</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Gallery</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">News & Events</a>
      </li>
    </ul>
    
   
    <button class="btn btn-outline-primary my-2 my-sm-0" type="button" style="margin-left: 10px">Logout</button>
  </div>
  
</nav>
    `);
};

const AppBar = () => {
    return (`
        <nav class="navbar navbar-expand-lg navbar-light bg-light app-bar">
  <a class="navbar-brand app-bar-brand" href="/">SmartGirls <span class="sr-only">(current)</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/#what-we-do">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#team">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Gallery</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="/news-and-events">News & Events</a>
      </li>
    </ul>
    
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  
</nav>
    `);
};

const HeaderIntro = () => {
    return `
    <div class="headerIntro"> 
    <div class="header-text">
       <div class="container">
            <h1>SMART GIRLS IN ICT</h1>
            <p>Supporting and Empowering Girls and young women in ICT movement </p>
            <a href="#what-we-do">SEE OUR ACTIVITIES</a></div>
        </div>
    </div>
    `
};

const Footer = () => {
    return (`
    <div class="footer-wrapper">
        <div class="footer-wrapper-top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div style="margin-top: 8px">
                            <h6>Resources</h6>
                            <span class="btn-block">Gallery</span>
                            <span class="btn-block">News & Events</span>
                        </div>
                    </div>
                    
                    <div class="col-12 col-xl-3 col-lg-3 col-sm-12 col-md-6">
                        <div style="margin-top: 8px">
                            <h6>About</h6>
                            <a style="color: white" href="#" class="btn-block">UDICT</a>
                            <a style="color: white" href="#" class="btn-block">DLab</a>
                            <a style="color: white" href="#" class="btn-block">Y4C</a>
                        </div>
                    </div>
                    
                    <div class="col-12 col-xl-3 col-lg-3 col-sm-12 col-md-6">
                       <div style="margin-top: 8px">
                            <h6>Contacts</h6>
                            <span class="btn-block">+255XXXXXXXX</span>
                            <span class="btn-block">CoICT B109 Science</span>
                        </div>
                    </div>
                    
                    <div class="col-12 col-xl-3 col-lg-3 col-sm-12 col-md-6">
                       <div style="margin-top: 8px">
                            <h6>Subscribe</h6>
                            <form>
                                <div class="form-group">
                                    <input placeholder="Enter email" class="form-control" type="email">
                                </div>
                                <button class="btn btn-outline-light btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-wrapper-bottom">
            <span class="footer-wrapper-bottom-text">@2020 SmartGirls</span>
        </div>
    </div>
    `);
};

module.exports.HeaderIntro = HeaderIntro;
module.exports.Footer = Footer;
module.exports.AppBar = AppBar;
module.exports.AppBarAdmin = AppBarAdmin;
