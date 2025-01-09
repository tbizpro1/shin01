import React from "react";

const MainContent = () => {
    return (
        <section className="content">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>
                            Página principal
                            <small className="text-muted">Welcome to Shin</small>
                        </h2>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <button className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10" type="button">
                            <i className="zmdi zmdi-plus"></i>
                        </button>
                        <ul className="breadcrumb float-md-right">
                            <li className="breadcrumb-item">
                                <a href="#">
                                    <i className="zmdi zmdi-home"></i> Shin
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="javascript:void(0);">Sample Pages</a>
                            </li>
                            <li className="breadcrumb-item active">Stater Page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="body">
                                <h4>Conteúdo da página</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainContent