import React from "react";
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";

export const AddSocio = () => {
    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar />
            <RightSideBar />
            <Chat />
            <section className="content agent">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>
                                Add Agents
                                <small className="text-muted">Welcome to Compass</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <button
                                className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
                                type="button"
                            >
                                <i className="zmdi zmdi-plus"></i>
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="zmdi zmdi-home"></i> Compass
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript:void(0);">Agents</a>
                                </li>
                                <li className="breadcrumb-item active">Add Agents</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="header">
                                    <h2>
                                        <strong>Basic</strong> Information <small>Description text here...</small>
                                    </h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown">
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="zmdi zmdi-more"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                <li>
                                                    <a href="javascript:void(0);">Action</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Something else</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close">
                                                <i className="zmdi zmdi-close"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone No." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Date of Birth" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Age" />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <select className="form-control show-tick">
                                                <option value="">-- Gender --</option>
                                                <option value="10">Male</option>
                                                <option value="20">Female</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <form
                                                action="/"
                                                id="frmFileUpload"
                                                className="dropzone dz-clickable"
                                                method="post"
                                                encType="multipart/form-data"
                                            >
                                                <div className="dz-message">
                                                    <div className="drag-icon-cph">
                                                        <i className="material-icons">touch_app</i>
                                                    </div>
                                                    <h3>Drop files here or click to upload.</h3>
                                                    <em>
                                                        (This is just a demo dropzone. Selected files are <strong>not</strong>
                                                        actually uploaded.)
                                                    </em>
                                                </div>
                                                <div className="fallback">
                                                    <input name="file" type="file" multiple />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea
                                                    rows="4"
                                                    className="form-control no-resize"
                                                    placeholder="Description"
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-round">
                                                Submit
                                            </button>
                                            <button type="submit" className="btn btn-default btn-round btn-simple">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        {/* repete estruturas similares */}
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Account</strong> Information <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle"
                                            data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <i className="zmdi zmdi-more"></i> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Social</strong> Information <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle"
                                            data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <i className="zmdi zmdi-more"></i> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Facebook" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Twitter" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Google" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Linkdin" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}