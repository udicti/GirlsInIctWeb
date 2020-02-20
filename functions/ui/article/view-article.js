const ViewArticle = () => {
    return (`
        <div class="container" style="margin: 50px auto;">
            <div class="row  ">
                <div class="col-lg-7" style="margin: auto">
                    <p style="font-weight: normal;font-size: 2.5vw; margin: 0;">Kawe Secondary School During Phase1 Session</p>
                   
                    <p  class="text-black-50">Human centered design session</p>
                     <div class="row">
                        <p class="h4 text-dark" style="border-radius: 50%; padding: 15px 20px; background: #C4C4C4">A</p>
                        <p  class="text-black-50" style="margin: auto 20px">
                         <span style="font-size: 14px">By Administrator  <br> June 23, 2010 </span>
                        </p>
                        <p style="margin: auto 10px 10px auto">
                            <i class="material-icons outline">share</i>
                            <!--<i class="material-icons outline">facebook</i>
                            <i class="material-icons outline">twitter</i>
                            <i class="material-icons outline">instagram</i>-->
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7" style=" margin: 30px auto;">
                <p class="" style="height: 400px; background-image: url('/images/read-article.png'); background-size: cover; background-repeat: no-repeat">
               </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7" style="margin: auto;">
                    <p style="font-size: 22px; font-family: 'Manjari Regular'; font-weight: lighter">
                        Human-centered design (HCD) [also Human-centred design, as used in ISO standards] is an
                         approach to problem solving, commonly used in design and management frameworks that develops 
                        solutions to problems by involving the human perspective in all steps of the problem-solving process.
                         Human involvement typically takes place in observing the problem within context, brainstorming, 
                        conceptualizing, developing, and implementing the solution.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7" style="margin: 30px auto"> 
                    <p class="text-black-50">Helpful</p>
                    <p>
                        <a class="btn text-white" style="background: #009FF9; margin-right:20px; width: 100px;">YES</a>
                        <a class="btn text-white" style="background: #009FF9; width: 100px;">NO</a>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 row" style="margin: auto">
              <!--  <div class="row">
                    <h6>More to Read</h6>
                    <hr >
                </div>-->
                <div class="card border-light" style="width: 18rem; margin: auto">
                  <img class="card-img-top" src="/images/read-article.png"  alt="Card image cap">
                  <div class="card-img-overlay text-white " style="height: 9rem; background: linear-gradient(90deg, rgba(0, 0, 0, 0.66) 0%, rgba(1, 131, 251, 0) 101.83%);">
                        <div style="margin-top: 35%;">
                            <p class="card-text float-left">14 October 2019</p>
                            <p class="card-text float-right">102 Views</p>   
                        </div>                 
                  </div>
                  <div class="card-body" style="padding: 0; margin-top: 10px">
                    <h6 class="card-title">Kawe Secondary School During Phase1 Session</h6>
                    <a href="/article/read" class="btn text-white" style="background: #009FF9;" >READ MORE</a>
                  </div>
                </div>
                <div class="card border-light" style="width: 18rem; margin: auto">
                  <img class="card-img-top" src="/images/read-article.png"  alt="Card image cap">
                  <div class="card-img-overlay text-white " style="height: 9rem; background: linear-gradient(90deg, rgba(0, 0, 0, 0.66) 0%, rgba(1, 131, 251, 0) 101.83%);">
                        <div style="margin-top: 35%;">
                            <p class="card-text float-left">14 October 2019</p>
                            <p class="card-text float-right">102 Views</p>   
                        </div>                 
                  </div>
                  <div class="card-body" style="padding: 0; margin-top: 10px">
                    <h6 class="card-title">Kawe Secondary School During Phase1 Session</h6>
                    <a href="/article/read" class="btn text-white" style="background: #009FF9;" >READ MORE</a>
                  </div>
                </div>
                </div>
            </div>
            
        </div>
    `)
};

module.exports.ViewArticle = ViewArticle;
