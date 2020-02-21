const {Footer} = require("../common");
const {AppBarAdmin} = require("../common");


const _NewArticleBody = () => {
    return (`
            <div  class="container" style="margin: 50px auto;">
            
             <form>
             <div id="createArticle">
                <div class="d-flex flex-row ">
                    <button v-if="!saveProgress" @click="save($event)" class="btn btn-primary btn-lg" type="submit" 
                     style="margin: 0 0 16px 16px; padding: 0 20px; height: 48px;">
                     Save Article
                     </button>
                     <div id="spin"  class="text-info font-weight-bold" style="display: none">
                        <div v-if="saveProgress" class="spinner-border text-info" style="margin: 0 10px"></div>
                     </div>
                </div>
                     
                 <div class="form-group col-md-6 flex-left">
                    <input v-model="title" name="title" type="text" class="form-control" min="8"  placeholder="Title" id="title" required>
                 </div>
             
                    
                    <!-- Modal -->
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
             <textarea cols="80" id="editor1" name="content" rows="10" required>            
            </textarea>
            </div>

        </form>
            </div>
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
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
          <script>
              const app = new Vue({
                'el':'#createArticle',
                mounted: function() {
                    document.getElementById('spin').setAttribute('style','margin: auto 50px 15px auto;');
                },
                data:{
                    title: '',
                    content: '',
                    hasError: false,
                    saveProgress: false
                },
                methods: {
                    save($event) {
                        $event.preventDefault();
                        this.content = CKEDITOR.instances.editor1.getData();
                        const errorModal = document.getElementById('errorModal');
                    if (this.title && this.content){
                        this.hasError= false;
                    } else {
                        this.hasError = "Please fill title and content";
                    }
                      
                        if (this.hasError) { 
                            $(errorModal).modal('show');
                        } else {
                            this.saveProgress = true;
                           // console.log(axios);
                            axios.post('/admin/article/create', {
                                title: this.title,
                                content: this.content
                            }, {
                                headers: {
                                    'content-type':'application/json'
                                }
                            }).then(value => {
                                this.saveProgress= false;
                                console.log(value.data);
                                location.replace('/admin/article');
                            }).catch(reason => {
                                this.saveProgress= false;
                                this.hasError = reason.response.data.message;
                                $(errorModal).modal('show');
                                console.log(reason.response);
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
    `)
};

const ArticleAdminNew = () => {
    return (`
          ${AppBarAdmin()}
          ${_NewArticleBody()}
          ${Footer()}
    `)
};

module.exports.NewArticle = ArticleAdminNew;
