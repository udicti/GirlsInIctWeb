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
let noOfPages = 0;
const getSkipValue = (data) => {
     noOfPages = parseInt(data / 20);
    if (data > noOfPages * 20){
       return noOfPages += 1;
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
const allArticlesBody = (articleData, totalArticles, skip) => {
    return (`
        <div class="headerIntro" style="height: 250px; background: linear-gradient(to right, rgba(1, 131, 251, 1), rgba(2, 255, 255, 0.5));"> 
            <div class="header-text ">
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
              <ul class="pagination nav-pills justify-content-center">
                   <script>
                    const j = ${getSkipValue(totalArticles)};
                    for (let i = 0; i < j; i++){
                    console.log(i);
                    const nextSkip = 20 * i;
                    const acivePage = ${skip} / 20;
                    const page = i + 1;
                    if (acivePage > 2 && j > 5) {
                        const startPagination = acivePage - 2;
                        const endPagination = acivePage + 2;
                        if (i >= startPagination && i <= endPagination) {
                            if (acivePage === i) {
                                 document.write('<li class="page-item active"><a class="page-link" href="/article?skip='+ nextSkip 
                                +'" style="border-radius:50%; margin: auto 5px;">' + page + '</a></li>');
                                } else {
                                document.write('<li class="page-item "><a class="page-link" href="/article?skip='+ nextSkip 
                                    +'" style="border-radius:50%; margin: auto 5px;">' + page + '</a></li>');
                            }
                        } 
                    } else {
                      if (acivePage === i) {
                             document.write('<li class="page-item active"><a class="page-link" href="/article?skip='+ nextSkip 
                            +'" style="border-radius:50%; margin: auto 5px;">' + page + '</a></li>');
                      } else {
                            document.write('<li class="page-item "><a class="page-link" href="/article?skip='+ nextSkip 
                                +'" style="border-radius:50%; margin: auto 5px;">' + page + '</a></li>');
                      }
                    }
                    
                    }
                </script>
                </li>
              </ul>
            </nav>
        </div>
    `);
};

const AllArticlesView = (articleData, totalArticles, skip) => {
    return (`
        ${AppBar()}
        ${allArticlesBody(articleData, totalArticles, skip)}
        ${Footer()}
    `);
};

module.exports.AllArticlesView = AllArticlesView;
