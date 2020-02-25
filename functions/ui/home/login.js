const Login = () => {
    return (`
        <div class="container-fluid " style="margin: 0; padding: 0; height: 100vh; ">
            <div class="row">
                <div id="image-col" class="col-md-7 text-white d-flex flex-column justify-content-center"
                    style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                     url('https://cdn.vanderbilt.edu/vu-news/vanderbiltmagazine/20190515095942/BlackGirlsCode3.jpg'); 
                     background-repeat: no-repeat; background-size: cover; min-height: 100vh;">
                    <p class="display-3 font-weight-bolder" style="margin: 20px 50px 0 50px ">Smart,</p>
                    <p class="display-3 font-weight-bolder" style="margin: 0 50px ">Elegant,</p>
                    <p class="display-3 font-weight-bolder" style="margin: 0 50px ">Energetic</p>
                    <p style="margin: auto 50px ">Supporting and Empowering Girls and young women in ICT movement</p>
                </div>
                <div class="col-md-5 row form-col d-flex justify-content-center align-items-center" style="margin: auto; height: 100vh;">
                  <div>
                     <img src="/images/smart.png" width="250px" style="margin: 10px auto">
                    <form action="/login"method="post" style="padding: 0; ">
                    <p class="text-center text-black-50" style="margin: 0 auto 70px auto">Please login in your account</p>
                  <div class="form-group">
                    <input required type="text" name="username" class="form-control" id="exampleInputEmail1" placeholder="Username" style="margin: 30px auto">
                  </div>
                  <div class="form-group">
                    <input required type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="margin: 30px auto">
                  </div>
                  <button type="submit" class="btn btn-info" style="width: 250px;
                   background: linear-gradient(90deg, rgba(0, 159, 249, 0.84) 11.81%, rgba(241, 36, 36, 0.84) 110.8%); margin-top: 70px">Login</button>
                </form>
              </div>

          
                </div>
            </div>
        </div>
    `)
};

module.exports.Login = Login;
