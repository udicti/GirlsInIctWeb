const {Footer, AppBar} = require("../common");
const _AllArticlesBody = () => {
    return (`
        <div class="headerIntro" style="height: 250px; background: linear-gradient(to right, rgba(1, 131, 251, 1), rgba(2, 255, 255, 0.5));"> 
            <div class="header-text">
               <div class="container">
                    <h1>NEWS AND EVENTS</h1>
                    </div>
            </div>
        </div>
       <div class="container">
                <div class="row" style="margin: 50px auto;">
                <div class="col-md-5 events-image" style="background-image: url(/images/headerintrobg.png)"></div>
                <div class="col-md-6" style="margin: auto">
                    <p><h3>Kawe Secondary School During Phase1 session</h3></p>
                    <p style="color: #727272;">
                        Student guided during human centered design and given a one to one session on how to formulate a
                        concept on those topics andalso to build a business from customer feedback
                     </p>
                    <p><a class="btn btn-primary font-weight-bold" href="#" style="background: #0798EA;">READ MORE</a></p>
                </div>
            </div>
       </div>
    `);
};

const AllArticlesView = () => {
    return (`
        ${AppBar()}
        ${_AllArticlesBody()}
        ${Footer()}
    `);
};

module.exports.AllArticlesView = AllArticlesView;
