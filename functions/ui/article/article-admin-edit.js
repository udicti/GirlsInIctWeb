const {Footer} = require("../common");
const {AppBarAdmin} = require("../common");

const _ArticleAdminEdit = () => {
    return (`
            <div class="container" style="margin: 50px auto;">
            
             <form>
             <div class="row">
                 <div class="form-group col-md-6">
                    <label for="title" class="h4">Title</label>
                    <input type="text" class="form-control "  placeholder="Title" id="title" >
                 </div>
                 <button class="btn btn-primary btn-lg" type="submit" style="margin: auto 50px 15px auto; padding: 0 20px">Update</button>
              </div>
             
             <div class="form-group">
             <textarea cols="80" id="editor1" name="editor1" rows="10">            
            </textarea>
            <script src="https://cdn.ckeditor.com/4.13.1/standard-all/ckeditor.js"></script>
              <script>
                CKEDITOR.replace('editor1', {
                  extraPlugins: 'autogrow',
                  autoGrow_minHeight: 200,
                  autoGrow_maxHeight: 600,
                  autoGrow_bottomSpace: 50,
                  removePlugins: 'resize'
                });
              </script>
            </div>

        </form>
            </div>
    `)
};

const ArticleAdminEdit = () => {
    return (`
        ${AppBarAdmin()}
        ${_ArticleAdminEdit()}
        ${Footer()}
    `)
};

module.exports.EditArticle = ArticleAdminEdit;
