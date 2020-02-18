const NewsAndEvents = () => {
    return (`
        <div class="news-and-events-wrapper">
            <div class="container">
                <div class="d-flex flex-row flex-nowrap btn-block align-items-center justify-content-center">
                    <span class="meet-team-line flex-grow-1"></span>
                    <h4 class="flex-grow-0 text-center">News And Events</h4>
                    <span class="meet-team-line flex-grow-1"></span>
                </div>
                <div class="row">
                    <div style="margin-top: 8px" class="d-flex justify-content-center align-items-center btn-block">
                        <p>Stay up to date on the latest news, analysis, commentaries and insights.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <div style="height: 300px; border-radius: 5px; width: 100%; background: white url(https://drive.google.com/uc?export=view&id=11I70OIDhJcH1vbOh63vyOkvl6lgQRMZ3);background-size: cover">
                           
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <h3>Kawe Secondary School During Phase1 session</h3>
                        <p class="d-block">Student guided during human centered design and given a one to 
                                one session on how to formulate a concept on those topics and
                                also to build a business from customer feedback
                        </p>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
                <div style="margin-top: 24px" class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6s">
                         <div style="height: 300px; border-radius: 5px; width: 100%; background: white url(https://drive.google.com/uc?export=view&id=11I70OIDhJcH1vbOh63vyOkvl6lgQRMZ3);background-size: cover">
                           
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <h3>Kawe Secondary School During Phase2 session</h3>
                        <p class="d-block">Student guided during human centered design and given a one to 
                                one session on how to formulate a concept on those topics and
                                also to build a business from customer feedback
                        </p>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    `)
};

module.exports.NewsAndEvents = NewsAndEvents;
