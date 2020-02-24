const {AppBarAdmin, Footer} = require('../common');

/**
 *
 * @param data {[]}
 * @param err {string}
 * @returns {string}
 * @private
 */
const _ArticleHomeBody = (data, err) => {
    return `
    <div class="container" style="margin: 50px auto;">
            <div >
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Articles</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Gallery</a>
                  </li>
                </ul>
           
           ${_showErr(err)}
            
              <div class="tab-pane fade show active container" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              <div style="">
                   
                <a href="/admin/article/create" class="btn btn-primary float-right" style="margin: 10px">New Article</a>
                 <div id="spin"  class="text-info font-weight-bold " style="visibility: hidden">
                        <div class="spinner-border text-info" style="margin: 0 10px"></div>deleting...
                     </div>
                 <table class="table">
                  <thead class="bg-primary text-white">
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${getTableRows(data)}
                  </tbody>
                </table>
              </div>

              </div>
              
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                Gallery Tab...
              </div>
            </div>
            </div>
                            
                <!-- Modal -->
               <!--  <div class="modal fade" id="confirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-body text-center">
                        <p><i class="material-icons text-warning display-4">warning</i></p>
                        <p class="text-black-50" style="font-size: 24px">Confirm deleting this article?</p>

                        <div>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <a href="/admin/article/delete/" class="btn btn-primary" onclick="">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>-->
            </div>
    `
};


const _showErr = (err) => {
    if (err) {
        return `
         <div class="tab-content" id="pills-tabContent">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              ${err}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          
        `
    } else {
        return '';
    }
};

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



/**
 *
 * @param data {{
 *     title: string,
 *     updatedAt: Date,
 *     objectId: string
 * }[]}
 */
const getTableRows = (data) => {
    let rows = '';
    let i = 1;
    data.forEach(article => {
         let date = new Date(article.updatedAt);
        rows = rows + `
            <tr>
              <td><p>${i++}</p></td>
              <td>
                <p>${article.title}</p>
               </td>
              <td><p> ${convertMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} </p></td>
              <td>
                <p>
                <a target="_blank" href="/article/${article.objectId}" data-toggle="tooltip" data-placement="top"   title="view" style="padding: 10px 5px"><i class="material-icons text-primary">remove_red_eye</i></a>
                <a href="/admin/article/update/${article.objectId}" data-toggle="tooltip" data-placement="top"   title="edit" style="padding: 10px 5px"><i class="material-icons text-success">edit</i></a>
                <span data-toggle="modal" data-target="#confirmDelete${article.objectId}" data-id="${article.objectId}">
                <a href="/admin/article/delete/${article.objectId}" onclick=" if (confirm('delete')) { if (document.readyState === 'complete') {document.getElementById('spin').setAttribute('style', 'visibility: visible')} return true;} else {return false;}" class="delete-tooltip" data-toggle="tooltip" data-placement="top" title="delete" style="padding: 10px 5px">
                    <i class="material-icons text-danger">delete</i>
                 </a>
                </span>
                </p>
              </td>
            </tr>
        `
    });
    return rows;
};

const ArticleAdminHome = (data, err) => {
    return `
        ${AppBarAdmin()}
        ${_ArticleHomeBody(data, err)}
        ${Footer()}
    `
};

module.exports.ArticleHome = ArticleAdminHome;
