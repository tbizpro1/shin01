import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';

const SignUp = () => {
  return (
    <div className="theme-purple authentication sidebar-collapse">
    <NavBar />
    <div className="page-header">
      {/* <div className="page-header-image" style={{ backgroundImage: 'url(src/assets/images/login.jpg)' }}>
      </div> */}
      <div className="container">
        <div className="col-md-12 content-center">
          <div className="card-plain">
            <form className="form" method="" action="">
              <div className="header">
                <div className="logo-container">
                  <img src="assets/images/logo.svg" alt="" />
                </div>
                <h5>Sign Up</h5>
                <span>Register a new membership</span>
              </div>
              <div className="content">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter User Name" />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-account-circle"></i>
                  </span>
                </div>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter Email" />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-email"></i>
                  </span>
                </div>
                <div className="input-group">
                  <input type="password" placeholder="Password" className="form-control" />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-lock"></i>
                  </span>
                </div>
                <div className="input-group">
                  <input type="password" placeholder="Confirm Password" className="form-control" />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-lock"></i>
                  </span>
                </div>
              </div>
              <div className="checkbox">
                <input id="terms" type="checkbox" />
                <label htmlFor="terms">
                  I read and agree to the <a href="javascript:void(0);">terms of usage</a>
                </label>
              </div>
              <div className="footer text-center">
                <a href="index.html" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">SIGN UP</a>
                <h6 className="m-t-20"><a className="link" href="sign-in.html">You already have a membership?</a></h6>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default SignUp;