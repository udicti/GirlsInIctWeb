const AppBar = () => {
    return (
        `<nav class="navbar navbar-expand-lg navbar-light bg-light app-bar">
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
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Gallery</a>-->
<!--              </li>-->
               <li class="nav-item">
                <a class="nav-link" href="/article?skip=0">News & Events</a>
              </li>
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>`
    );
};

module.exports = AppBar;
