const ArticleHome = () => {
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
            
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active container" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                              <div style="">

                <a href="/article/create" class="btn btn-primary float-right" style="margin: 10px">New Article</a>
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
                        <a href="/article/read" data-toggle="tooltip" data-placement="top"   title="view" style="padding: 10px 5px"><i class="material-icons text-primary">remove_red_eye</i></a>
                        <a href="/article/update" data-toggle="tooltip" data-placement="top"   title="edit" style="padding: 10px 5px"><i class="material-icons text-success">edit</i></a>
                        <span data-toggle="modal" data-target="#confirmDelete" >
                        <a href="#" class="delete-tooltip" data-toggle="tooltip" data-placement="top" title="delete" style="padding: 10px 5px">
                            <i class="material-icons text-danger">delete</i>
                         </a>
                        </span>
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
            </div>
                            
                <!-- Modal -->
                <div class="modal fade" id="confirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-body text-center">
                        <p><i class="material-icons text-warning display-4">warning</i></p>
                        <p class="text-black-50" style="font-size: 24px">Confirm deleting this article?</p>
                        
                        <div>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

    `
};

module.exports.ArticleHome = ArticleHome;
