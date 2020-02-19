const NewArticle = () => {
    return (`
            <div class="container" style="margin: 50px auto;">
            
             <form>
             <div class="row">
                 <div class="form-group col-md-6">
                    <label for="title" class="h4">Title</label>
                    <input type="text" class="form-control "  placeholder="Title" id="title" >
                 </div>
                 <button class="btn btn-primary btn-lg" type="submit" style="margin: auto 50px 15px auto; padding: 0 20px">Save</button>
              </div>
             
             <div class="form-group">
             <textarea cols="80" id="editor1" name="editor1" rows="10">
&lt;p&gt;This editor instance was configured to &lt;strong&gt;automatically adjust its height to content&lt;/strong&gt; that is added to it.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Add some content here &lt;/strong&gt;to see &lt;strong&gt;how the editor expands&lt;/strong&gt; in order to fit it in.&lt;/p&gt;
</textarea>
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
           <!-- <div >
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Articles</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Gallery</a>
                  </li>
                </ul>
            
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active container" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              <div style="">

                <button type="button" class="btn btn-primary float-right" style="margin: 10px">New Article</button>
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
                    <tr>
                      <td><p>000</p></td>
                      <td>
                        <p>the Bird jsdfksdghasd asdfjksdgyasdf asdfhasdfas d sd fadasdfasdfasdfasd as as dfasdfasdfa  asfd
                        </p>
                       </td>
                      <td><p>Feb,20 2020</p></td>
                      <td>
                        <p>
                        <span class="edit-tooltip" >
                        <a href="#" data-toggle="tooltip" data-placement="top"   title="edit" style="padding: 10px 5px"><i class="material-icons text-success">edit</i></a>
                        </span><a href="#" class="delete-tooltip" data-toggle="tooltip" data-placement="top"   title="delete" style="padding: 10px 5px"><i class="material-icons text-danger">delete</i></a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              </div>
              
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                Gallery Tab...
              </div>
            </div>
            </div>-->
            
                
            </div>
    `)
};

module.exports.NewArticle = NewArticle;
