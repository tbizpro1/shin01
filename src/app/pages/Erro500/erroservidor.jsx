import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';

const ErroServidor = () => {
    return (
        <div className="theme-purple authentication sidebar-collapse">
            <NavBar />
            <div className="page-header">
                {/* <div
                    className="page-header-image"
                    style={{ backgroundImage: 'url(src/assets/images/login.jpg)' }}
                ></div> */}
                <div className="container">
                    <div className="col-md-12 content-center">
                        <div className="card-plain">
                            <form className="form" method="" action="">
                                <div className="header">
                                    <div className="logo-container">
                                        <img src="assets/images/logo.svg" alt="" />
                                    </div>
                                    <h5>Error 500</h5>
                                    <span>Something's broken :-(</span>
                                </div>
                                <div className="content">
                                    <div className="input-group input-lg">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                        />
                                        <span className="input-group-addon">
                                            <i className="zmdi zmdi-search"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="footer text-center">
                                    <a
                                        href="index.html"
                                        className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"
                                    >
                                        GO TO HOMEPAGE
                                    </a>
                                    <h6 className="m-t-20">
                                        <a href="#" className="link">
                                            Need Help?
                                        </a>
                                    </h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ErroServidor