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

module.exports = Footer;
