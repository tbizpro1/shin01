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
                            {/* <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resultado da Pesquisa</a>
                            </li> */}
                            <li className="nav-item align-content-center">
                                <a className="nav-link" title="Siga-nos no Instagram" href="https://www.instagram.com/startup_piaui/" target="_blank" rel="noopener noreferrer">
                                    <i className="zmdi zmdi-instagram"></i>
                                    {/* <p className="d-lg-none d-xl-none">Instagram</p> */}
                                </a>
                                <a className="nav-link" title="Siga-nos no LinkedIn" href="https://www.linkedin.com/company/startup-piau%C3%AD/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                    <i className="zmdi zmdi-linkedin-box"></i>
                                    {/* <p className="d-lg-none d-xl-none">LinkedIn</p> */}
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