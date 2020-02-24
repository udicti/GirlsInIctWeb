const {Footer, AppBar} = require("../common");
const convertMonth = (month) => {
    switch (month) {
        case 0: return "Jan";
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 7: return "Aug";
        case 8: return "Sep";
        case 9: return "Oct";
        case 10: return "Nov";
        case 11: return "Dec";
    }
};
const getImageUrl = (data) => {
    const start = data.toString().indexOf('src="') + 5;
    const end = data.toString().indexOf('" style');
    const image = data.toString().slice(start, end);
    return image;
};
const getSkipValue = (data) => {
    let noOfPages = parseInt(data / 20);
    if (data > noOfPages * 20){
        noOfPages += 1;
    }
};
const getNewsEventData = (data) => {
    let rows = '';
    data.forEach(article => {
        let date = new Date(article.updatedAt);
        rows = rows + `

                <div class="row" style="margin: 30px auto;">
                <div class="col-md-5" >
                     <img class="card-img-top" src="${getImageUrl(article.content)}" onerror="this.onerror=null; this.src='/images/default-article-image.jpeg'" style="border-radius: 10px; max-height: 300px">
                  <div class="card-img-overlay text-white d-flex flex-column justify-content-end" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.66) 0%, rgba(1, 131, 251, 0) 101.83%); 
                  border-radius: 10px; margin-left: 15px">
                        <div>
                            <p class="float-left"> ${convertMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} </p>
                        </div>                 
                  </div>

                </div>
                <div class="col-md-6" style="margin: auto">
                    <p><h3>${article.title}</h3></p>
                    <p>
                     </p>
                    <p><a href="/article/${article.objectId}" class="btn btn-primary font-weight-bold" href="#" style="background: #0798EA;">READ MORE</a></p>
                </div>
            </div>
        `
    });
    return rows;
};
const allArticlesBody = (articleData, totalArticles) => {
    return (`
        <div class="headerIntro" style="height: 250px; background: linear-gradient(to right, rgba(1, 131, 251, 1), rgba(2, 255, 255, 0.5));"> 
            <div class="header-text">
               <div class="container">
                    <h1>NEWS AND EVENTS</h1>
                    </div>
            </div>
        </div>
       <div class="container">
              ${getNewsEventData(articleData)}
        </div>
       <div class="container">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
        </div>
    `);
};

const AllArticlesView = (articleData, totalArticles) => {
    return (`
        ${AppBar()}
        ${allArticlesBody(articleData, totalArticles)}
        ${Footer()}
    `);
};

module.exports.AllArticlesView = AllArticlesView;
