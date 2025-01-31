import React from "react";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
                <div className="container">
                    <div className="navbar-translate n_logo">
                        <a className="navbar-brand" href="#" title="SHIN" target="_blank" rel="noopener noreferrer">
                            SHIN
                        </a>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search Result</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" title="Follow us on Twitter" href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="zmdi zmdi-twitter"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link btn btn-primary btn-round" href="sign-up.html">SIGN UP</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar