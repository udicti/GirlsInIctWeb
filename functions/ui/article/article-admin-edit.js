const {Footer} = require("../common");
const {AppBarAdmin} = require("../common");

const _ArticleAdminEdit = (articleData) => {
    let content = `'${articleData.content}'`;
    content = content.toString().replace(/\n/g,'');
    return (`
            <div class="container" style="margin: 50px auto;">
             <form>
             
             <div id="updateArticle">
                 <div class="d-flex flex-row ">
                    <button v-if="!saveProgress" @click="update($event)" class="btn btn-primary btn-lg" type="submit" 
                     style="margin: 0 0 16px 16px; padding: 0 20px; height: 48px;">
                     Update Article
                     </button>
                     <div id="spin"  class="text-info font-weight-bold" style="">
                        <span v-if="saveProgress"><div class="spinner-border text-info" style="margin: 0 10px"></div>updating...</span>
                     </div>
                 </div>
                 <div class="form-group col-md-6 flex-left">
                    <input v-model="articleId" type="text" class="form-control " hidden="true" id="articleId" >
                    <input v-model="title" type="text" class="form-control " placeholder="Title" id="title" >
                 </div>
                 <div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Error</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            {{hasError}}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  removePlugins: 'resize',
                });
               CKEDITOR.instances.editor1.setData(${content});
              </script>
                 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
          <script>
              const app = new Vue({
                'el':'#updateArticle',
                data:{
                    articleId: '${articleData.objectId}',
                    title: '${articleData.title}',
                    content: '',
                    hasError: false,
                    saveProgress: false
                },
                methods: {
                    update($event) {
                        $event.preventDefault();
                        this.content = CKEDITOR.instances.editor1.getData();
                        const errorModal = document.getElementById('errorModal');
                    if (this.articleId && this.title && this.content){
                        this.hasError= false;
                    } else {
                        this.hasError = "Please fill title and content";
                    }
                      
                        if (this.hasError) { 
                            $(errorModal).modal('show');
                        } else {
                            this.saveProgress = true;
                           // console.log(axios);
                            axios.post('/admin/article/update', {
                                objectId: this.articleId,
                                title: this.title,
                                content: this.content
                            }, {
                                headers: {
                                    'content-type':'application/json'
                                }
                            }).then(value => {
                                this.saveProgress= false;
                                location.replace('/admin/article');
                            }).catch(reason => {
                                this.saveProgress= false;
                                this.hasError = reason.response.data.message;
                                $(errorModal).modal('show');
                            });
                        }
                    }
                },
                
                hasError(title, content){
                    if (title && content){
                        return false;
                    } else {
                        return "Please fill title and content";
                    }
                }
              });
        </script>
            </div>

        </form>
            </div>

    `)
};

const ArticleAdminEdit = (articleData) => {
    return (`
        ${AppBarAdmin()}
        ${_ArticleAdminEdit(articleData)}
        ${Footer()}
    `)
};

module.exports.EditArticle = ArticleAdminEdit;
