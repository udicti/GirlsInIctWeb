const NewsAndEvents = (articleData) => {
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
    const getNewsEventData = (data) => {
        let rows = '';
        let i = 1;
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
                ${getNewsEventData(articleData)}
            </div>
        </div>
    `)
};

module.exports.NewsAndEvents = NewsAndEvents;
