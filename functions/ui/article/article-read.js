const {Footer, AppBar} = require("../common");

/**
 *
 * @param articleData {string}
 * @param readMoreData {string}
 * @returns {string}
 * @private
 */
const _ViewArticleBody = (articleData, readMoreData) => {
    let date = new Date(articleData.updatedAt);
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
    const getReadMoreData = (data) => {
        let rows = '';
        let i = 1;
        data.forEach(article => {
            let date = new Date(article.updatedAt);
            rows = rows + `
                <div style="width: 18rem; margin: 10px auto">
                <div class="card border-light" style="width: 18rem; margin: 10px auto">
                  <img class="card-img-top" src="${getImageUrl(article.content)}" onerror="this.onerror=null; this.src='/images/default-article-image.jpeg'" alt="Card image cap">
                  <div class="card-img-overlay text-white d-flex flex-column justify-content-end" style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.66) 0%, rgba(1, 131, 251, 0) 101.83%);">
                        <div>
                            <p class="float-left"> ${convertMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} </p>
<!--
                            <p class="float-right">102 Views</p>   
-->
                        </div>                 
                  </div>
                     </div>
                    <div class="card-body" style="padding: 0; margin-top: 10px">
                    <h6 class="card-title">${article.title}</h6>
                    <a href="/article/${article.objectId}" class="btn text-white" style="background: #009FF9;" >READ MORE</a>
                  </div>
                </div>
        `
        });
        return rows;
    };

    return (`
        <div class="container" style="margin: 50px auto;">
            <div class="row  ">
                <div class="col-lg-7" style="margin: auto">
                    <p class="h1" style="font-weight: normal; margin: 0;">${articleData.title}</p>
                   
<!--
                    <p  class="text-black-50">Human centered design session</p>
-->
                     <div class="row">
                        <p class="h4 text-dark" style="border-radius: 50%; padding: 15px 20px; background: #C4C4C4">A</p>
                        <p  class="text-black-50" style="margin: auto 20px">
                         <span style="font-size: 14px">By Administrator  <br> ${convertMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} </span>
                        </p>
                        <p style="margin: auto 10px 10px auto">
                            <i class="material-icons outline">share</i>
                            <!--<i class="material-icons outline">facebook</i>
                            <i class="material-icons outline">twitter</i>
                            <i class="material-icons outline"></i>-->
                        </p>
                    </div>
                </div>
            </div>
     <!--       <div class="row">
                <div class="col-lg-7" style=" margin: 30px auto;">
                <p class="" style="height: 400px; background-image: url(); background-size: cover; background-repeat: no-repeat">
               </p>
                </div>
            </div>-->
            <div class="row">
                <div class="col-lg-7" style="margin: auto;">
                    <p style="font-size: 22px; font-family: 'Manjari Regular'; font-weight: lighter">
                        ${articleData.content}
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
              <div class="col-lg-7" style="margin: auto">
                    <h6>More to Read</h6>
                    <span class="flex-grow-1"></span>
                    <hr style=" background: black">
                </div>
                <div class="row">
                   <div class="col-lg-7 row" style="margin: auto">                
                          ${getReadMoreData(readMoreData)}
                    </div>
            </div>
            
        </div>
    `);
};

/**
 *
 * @param articleData {string}
 * @returns {string}
 * @constructor
 */
const ArticleRead = (articleData, readMoreData) => {
    return `
        ${AppBar()}
        ${_ViewArticleBody(articleData, readMoreData)}
        ${Footer()}
    `
};

module.exports.ViewArticle = ArticleRead;
