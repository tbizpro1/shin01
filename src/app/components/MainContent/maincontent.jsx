import React from "react";
import { summer, sky, rain, cloudy, socio } from "../../../assets/images";

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
                    <div className="col-md-12 col-lg-4">
                    <div className="card weather l-pink">
                            <div className="body">
                                <div className="city">
                                    <span>sky is clear</span>
                                    <h3>Teresina</h3>
                                    <img src={summer} alt="Summer weather" />
                                </div>
                                <ul className="row days list-unstyled m-b-0">
                                    <li>
                                        <h5>SUN</h5>
                                        <img src={sky} alt="Sky weather" />
                                        <span className="degrees">77</span>
                                    </li>
                                    <li>
                                        <h5>MON</h5>
                                        <img src={rain} alt="Rain weather" />
                                        <span className="degrees">81</span>
                                    </li>
                                    <li>
                                        <h5>TUE</h5>
                                        <img src={summer} alt="Summer weather" />
                                        <span className="degrees">82</span>
                                    </li>
                                    <li>
                                        <h5>WED</h5>
                                        <img src={summer} alt="Summer weather" />
                                        <span className="degrees">82</span>
                                    </li>
                                    <li>
                                        <h5>THU</h5>
                                        <img src={cloudy} alt="Cloudy weather" />
                                        <span className="degrees">81</span>
                                    </li>
                                    <li>
                                        <h5>FRI</h5>
                                        <img src={summer} alt="Summer weather" />
                                        <span className="degrees">67</span>
                                    </li>
                                    <li>
                                        <h5>SAT</h5>
                                        <img src={cloudy} alt="Cloudy weather" />
                                        <span className="degrees">81</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <div className="card top-report">
                            <div className="body">
                                <h3 className="m-t-0 m-b-0">50.5 Gb</h3>
                                <p className="text-muted">Traffic this month</p>
                                <div className="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope" value="68" type="success">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{ width: "68%" }}></div>
                                </div>
                                <small>4% higher than last month</small>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card">
                            <div className="header">
                                <h2><strong>New</strong> Partners</h2>
                            </div>
                            <div className="body">
                                <ul className="new_friend_list list-unstyled row">
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={socio} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Jackson</h6>
                                            <small className="join_date">Today</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={socio} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Aubrey</h6>
                                            <small className="join_date">Yesterday</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={socio} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Oliver</h6>
                                            <small className="join_date">08 Nov</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={socio} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Isabella</h6>
                                            <small className="join_date">12 Dec</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={socio} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Jacob</h6>
                                            <small className="join_date">12 Dec</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={socio} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Matthew</h6>
                                            <small className="join_date">17 Dec</small>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card activities">
                            <div className="header">
                                <h2><strong>Activities</strong> <small>Recent user Activities</small></h2>
                            </div>
                            <div className="body">
                                <ul className="list-unstyled activity">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="zmdi zmdi-cake bg-blue"></i>
                                            <div className="info">
                                                <h4>Admin Birthday</h4>
                                                <small>Will be Dec 21th</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="zmdi zmdi-file-text bg-red"></i>
                                            <div className="info">
                                                <h4>Code Change</h4>
                                                <small>Will be Dec 22th</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="zmdi zmdi-account-box-phone bg-green"></i>
                                            <div className="info">
                                                <h4>Add New Contact</h4>
                                                <small>Will be Dec 23th</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="zmdi zmdi-email bg-amber"></i>
                                            <div className="info">
                                                <h4>New Email</h4>
                                                <small>Will be July 28th</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="zmdi zmdi-account-box-phone bg-green"></i>
                                            <div className="info">
                                                <h4>Add New Contact</h4>
                                                <small>Will be Dec 23th</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card-group text-center">
                            <div className="card">
                                <img className="img-fluid" src="assets/images/image2.jpg" alt="Card image cap" />
                                <div className="body">
                                    <h4 className="title">Card title</h4>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iure, esse beatae sapiente dolor aliquid ea
                                        ipsam, ducimus facere. Ut culpa at asperiores voluptatibus ipsa vero natus, voluptates, quasi cum!</p>
                                    <p className="text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="img-fluid" src="assets/images/image3.jpg" alt="Card image cap" />
                                <div className="body">
                                    <h4 className="title">Card title</h4>
                                    <p className="text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="img-fluid" src="assets/images/image1.jpg" alt="Card image cap" />
                                <div className="body">
                                    <h4 className="title">Card title</h4>
                                    <p className="text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has
                                        even longer content than the first to show that equal height action.</p>
                                    <a href="#" className="btn btn-primary btn-round waves-effect">Button</a>
                                    <p className="text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <ul className="row profile_state list-unstyled">
                                <li className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="zmdi zmdi-eye col-amber"></i>
                                        <h4>2,365</h4>
                                        <span>Post View</span>
                                    </div>
                                </li>
                                <li className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="zmdi zmdi-thumb-up col-blue"></i>
                                        <h4>365</h4>
                                        <span>Likes</span>
                                    </div>
                                </li>
                                <li className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="zmdi zmdi-comment-text col-red"></i>
                                        <h4>65</h4>
                                        <span>Comments</span>
                                    </div>
                                </li>
                                <li className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="zmdi zmdi-account text-success"></i>
                                        <h4>2,055</h4>
                                        <span>Profile Views</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row clearfix">
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="carousel slide twitter-feed" data-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item text-center active">
                                                <div className="col-12">
                                                    <i className="zmdi zmdi-twitter"></i>
                                                </div>
                                                <div className="col-12">
                                                    <p><i className="zmdi zmdi-quote"></i>Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item text-center">
                                                <div className="col-12">
                                                    <i className="zmdi zmdi-twitter"></i>
                                                </div>
                                                <div className="col-12">
                                                    <p><i className="zmdi zmdi-quote"></i>It is a long established fact that a reader will ontent of a page when looking at its layout.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="carousel slide facebook-feed" data-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item text-center active">
                                                <div className="col-12">
                                                    <i className="zmdi zmdi-facebook"></i>
                                                </div>
                                                <div className="col-12">
                                                    <p><i className="zmdi zmdi-quote"></i>Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item text-center">
                                                <div className="col-12"><i className="zmdi zmdi-facebook"></i></div>
                                                <div className="col-12">
                                                    <p><i className="zmdi zmdi-quote"></i>It is a long established fact that a reader will ontent of a page when looking at its layout.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix social-widget">
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="card info-box-2 hover-zoom-effect facebook-widget">
                                    <div className="icon"><i className="zmdi zmdi-facebook"></i></div>
                                    <div className="content">
                                        <div className="text">Like</div>
                                        <div className="number">123</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="card info-box-2 hover-zoom-effect instagram-widget">
                                    <div className="icon"><i className="zmdi zmdi-instagram"></i></div>
                                    <div className="content">
                                        <div className="text">Followers</div>
                                        <div className="number">231</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="card info-box-2 hover-zoom-effect twitter-widget">
                                    <div className="icon"><i className="zmdi zmdi-twitter"></i></div>
                                    <div className="content">
                                        <div className="text">Followers</div>
                                        <div className="number">31</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="card info-box-2 hover-zoom-effect google-widget">
                                    <div className="icon"><i className="zmdi zmdi-google"></i></div>
                                    <div className="content">
                                        <div className="text">Like</div>
                                        <div className="number">254</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="card info-box-2 hover-zoom-effect linkedin-widget">
                                    <div className="icon"><i className="zmdi zmdi-linkedin"></i></div>
                                    <div className="content">
                                        <div className="text">Followers</div>
                                        <div className="number">2510</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="card info-box-2 hover-zoom-effect behance-widget">
                                    <div className="icon"><i className="zmdi zmdi-behance"></i></div>
                                    <div className="content">
                                        <div className="text">Project</div>
                                        <div className="number">121</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <div className="card">
                            <div className="header">
                                <h2><strong>Inbox</strong></h2>
                                <ul className="header-dropdown">
                                    <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                        <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                            <li><a href="javascript:void(0);">Edit</a></li>
                                            <li><a href="javascript:void(0);">Delete</a></li>
                                            <li><a href="javascript:void(0);">Report</a></li>
                                        </ul>
                                    </li>
                                    <li className="remove">
                                        <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="body">
                                <ul className="inbox-widget list-unstyled clearfix">
                                    <li className="inbox-inner"> <a href="javascript:void(0)">
                                        <div className="inbox-item">
                                            <div className="inbox-img"> <img src="assets/images/xs/avatar1.jpg" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Aaron	Enlightened</p>
                                                <p className="inbox-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">13:34 PM</p>
                                            </div>
                                        </div>
                                    </a> </li>
                                    <li className="inbox-inner"> <a href="javascript:void(0)">
                                        <div className="inbox-item">
                                            <div className="inbox-img"> <img src="assets/images/xs/avatar2.jpg" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Alvin Doe</p>
                                                <p className="inbox-message">Lorem Ipsum is simply dummy text oftting industry. Lorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">13:34 PM</p>
                                            </div>
                                        </div>
                                    </a> </li>
                                    <li className="inbox-inner"> <a href="javascript:void(0)">
                                        <div className="inbox-item">
                                            <div className="inbox-img"> <img src="assets/images/xs/avatar3.jpg" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Austin</p>
                                                <p className="inbox-message">text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">13:34 PM</p>
                                            </div>
                                        </div>
                                    </a> </li>
                                    <li className="inbox-inner"> <a href="javascript:void(0)">
                                        <div className="inbox-item">
                                            <div className="inbox-img"> <img src="assets/images/xs/avatar4.jpg" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">John Benjamin</p>
                                                <p className="inbox-message">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">13:34 PM</p>
                                            </div>
                                        </div>
                                    </a> </li>
                                    <li className="inbox-inner"> <a href="javascript:void(0)">
                                        <div className="inbox-item">
                                            <div className="inbox-img"> <img src="assets/images/xs/avatar5.jpg" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Broderick</p>
                                                <p className="inbox-message">text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">13:34 PM</p>
                                            </div>
                                        </div>
                                    </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <div className="card w_calender">
                            <div className="date l-slategray">
                                <span>Sunday, December 28</span>
                                <span>2017</span>
                            </div>
                            <div className="body days">
                                <ul className="m-t-10">
                                    <li>MON</li>
                                    <li>TUE</li>
                                    <li>WED</li>
                                    <li>THU</li>
                                    <li>FRI</li>
                                    <li>SAT</li>
                                    <li>SUN</li>
                                </ul>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                </ul>
                                <ul>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                </ul>
                                <ul>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                </ul>
                                <ul>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li><em>28</em></li>
                                </ul>
                                <ul>
                                    <li>29</li>
                                    <li>30</li>
                                    <li>31</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-12">
                        <div className="card member-card">
                            <div className="header l-pink">
                                <h4 className="m-t-10">Eliana Smith</h4>
                            </div>
                            <div className="member-img">
                                <a href="profile.html" className="">
                                    <img src="assets/images/lg/avatar2.jpg" className="rounded-circle" alt="profile-image" />
                                </a>
                            </div>
                            <div className="body">
                                <div className="col-12">
                                    <ul className="social-links list-unstyled">
                                        <li>
                                            <a title="facebook" href="#">
                                                <i className="zmdi zmdi-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="twitter" href="#">
                                                <i className="zmdi zmdi-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="instagram" href="javascript:void(0);">
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <h5>18</h5>
                                        <small>Files</small>
                                    </div>
                                    <div className="col-4">
                                        <h5>2GB</h5>
                                        <small>Used</small>
                                    </div>
                                    <div className="col-4">
                                        <h5>65,6$</h5>
                                        <small>Spent</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 col-md-12">
                        <div className="card member-card">
                            <div className="header l-cyan">
                                <h4 className="m-t-10">Michael Dorsey</h4>
                            </div>
                            <div className="member-img">
                                <a href="profile.html" className="">
                                    <img src="assets/images/lg/avatar1.jpg" className="rounded-circle" alt="profile-image" />
                                </a>
                            </div>
                            <div className="body">
                                <div className="col-12">
                                    <ul className="social-links list-unstyled">
                                        <li>
                                            <a title="facebook" href="#">
                                                <i className="zmdi zmdi-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="twitter" href="#">
                                                <i className="zmdi zmdi-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="instagram" href="javascript:void(0);">
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <h5>57</h5>
                                        <small>Files</small>
                                    </div>
                                    <div className="col-4">
                                        <h5>12GB</h5>
                                        <small>Used</small>
                                    </div>
                                    <div className="col-4">
                                        <h5>1,256$</h5>
                                        <small>Spent</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row clearfix">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="card current_progress">
                            <div className="header">
                                <h2><strong>Chat</strong> Box<small>Design Team</small></h2>
                            </div>
                            <div className="body">
                                <div className="chat-widget">
                                    <ul className="chat-scroll-list clearfix">
                                        <li className="left float-left">
                                            <img src="assets/images/xs/avatar3.jpg" className="rounded-circle" alt="" />
                                            <div className="chat-info">
                                                <a className="name" href="#">Alexander</a>
                                                <span className="datetime">6:12</span>
                                                <span className="message">Hello, John </span>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                                        </li>
                                        <li className="right">
                                            <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                        </li>
                                        <li className="left float-left">
                                            <img src="assets/images/xs/avatar2.jpg" className="rounded-circle" alt="" />
                                            <div className="chat-info">
                                                <a className="name" href="#">Elizabeth</a>
                                                <span className="datetime">6:25</span>
                                                <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                                        </li>
                                        <li className="left float-left"> <img src="assets/images/xs/avatar1.jpg" className="rounded-circle" alt="" />
                                            <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                        </li>
                                        <li className="right">
                                            <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="input-group p-t-15">
                                    <input type="text" className="form-control" placeholder="Enter text here..." />
                                    <span className="input-group-addon">
                                        <i className="zmdi zmdi-mail-send"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className="card">
                            <div className="header">
                                <h2><strong>Social</strong> Media</h2>
                                <ul className="header-dropdown">
                                    <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                        <ul className="dropdown-menu dropdown-menu-right">
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
                                <div className="table-responsive social_media_table">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Media</th>
                                                <th>Name</th>
                                                <th>Like</th>
                                                <th>Comments</th>
                                                <th>Share</th>
                                                <th>Members</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="social_icon linkedin"><i className="zmdi zmdi-linkedin"></i></span>
                                                </td>
                                                <td><span className="list-name">Linked In</span>
                                                    <span className="text-muted">Florida, United States</span>
                                                </td>
                                                <td>19K</td>
                                                <td>14K</td>
                                                <td>10K</td>
                                                <td>
                                                    <span className="badge badge-success">2341</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="social_icon twitter-table"><i className="zmdi zmdi-twitter"></i></span>
                                                </td>
                                                <td><span className="list-name">Twitter</span>
                                                    <span className="text-muted">Arkansas, United States</span>
                                                </td>
                                                <td>7K</td>
                                                <td>11K</td>
                                                <td>21K</td>
                                                <td>
                                                    <span className="badge badge-success">952</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="social_icon facebook"><i className="zmdi zmdi-facebook"></i></span>
                                                </td>
                                                <td><span className="list-name">Facebook</span>
                                                    <span className="text-muted">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>8K</td>
                                                <td>
                                                    <span className="badge badge-success">6127</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="social_icon google"><i className="zmdi zmdi-google-plus"></i></span>
                                                </td>
                                                <td><span className="list-name">Google Plus</span>
                                                    <span className="text-muted">Arizona, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>154</td>
                                                <td>
                                                    <span className="badge badge-success">325</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="social_icon youtube"><i className="zmdi zmdi-youtube-play"></i></span>
                                                </td>
                                                <td><span className="list-name">YouTube</span>
                                                    <span className="text-muted">Alaska, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>200</td>
                                                <td>
                                                    <span className="badge badge-success">160</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <div className="card project_widget">
                            <div className="pw_img">
                                <img className="img-responsive" src="assets/images/image2.jpg" alt="About the image" />
                            </div>
                            <div className="pw_content">
                                <div className="pw_header">
                                    <h6>Magazine Design</h6>
                                    <small className="text-muted">Compass  |  Last Update: 12 Dec 2017</small>
                                </div>
                                <div className="pw_meta">
                                    <span>4,870 USD</span>
                                    <small className="text-muted">Budget / Salary</small>
                                    <small className="text-danger">17 Days Remaining</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card project_widget">
                            <div className="pw_img">
                                <img className="img-responsive" src="assets/images/image4.jpg" alt="About the image" />
                            </div>
                            <div className="pw_content">
                                <div className="pw_header">
                                    <h6>New Dashboard</h6>
                                    <small className="text-muted">Compass  |  Last Update: 17 Dec 2017</small>
                                </div>
                                <div className="pw_meta">
                                    <span>921 USD</span>
                                    <small className="text-muted">Budget / Salary</small>
                                    <small className="text-success">Early Dec 2017</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card project_widget">
                            <div className="pw_img">
                                <img className="img-responsive" src="assets/images/image3.jpg" alt="About the image" />
                            </div>
                            <div className="pw_content">
                                <div className="pw_header">
                                    <h6>Mobile App</h6>
                                    <small className="text-muted">Compass  |  Last Update: 21 Dec 2017</small>
                                </div>
                                <div className="pw_meta">
                                    <span>1,870 USD</span>
                                    <small className="text-muted">Budget / Salary</small>
                                    <small className="text-danger">10 Days Remaining</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12">
                        {/* <div className="card">
                            <div className="body">
                                <div id="demo2" className="carousel slide" data-ride="carousel">
                                    Indicators
                                    <ul className="carousel-indicators">
                                        <li data-target="#demo2" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo2" data-slide-to="1" className=""></li>
                                        <li data-target="#demo2" data-slide-to="2" className=""></li>
                                    </ul>

                                    Wrapper for slides
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="assets/images/image-gallery/5.jpg" className="img-fluid" alt="" />
                                            <div className="carousel-caption">
                                                <h3>Chicago</h3>
                                                <p>Thank you, Chicago!</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/image-gallery/6.jpg" className="img-fluid" alt="" />
                                            <div className="carousel-caption">
                                                <h3>New York</h3>
                                                <p>We love the Big Apple!</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/image-gallery/12.jpg" className="img-fluid" alt="" />
                                            <div className="carousel-caption">
                                                <h3>Los Angeles</h3>
                                                <p>We had such a great time in LA!</p>
                                            </div>
                                        </div>
                                    </div>

                                    Controls
                                    Left and right controls
                                    <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo2" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* <div className="card">
                            <div className="header">
                                <h2><strong>Reports</strong></h2>
                                <ul className="header-dropdown m-r--5">
                                    <li className="dropdown">
                                        <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <i className="zmdi zmdi-more-vert"></i>
                                        </a>
                                        <ul className="dropdown-menu float-right">
                                            <li>
                                                <a href="javascript:void(0);">Action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Another action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Something else here</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="body table-responsive">
                                <table className="table table-hover m-b-0">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Charts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dean Otto</td>
                                            <td>
                                                <span className="sparkbar">5,8,6,3,5,9,2</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>K. Thornton</td>
                                            <td>
                                                <span className="sparkbar">10,8,9,3,5,8,5</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Kane D.</td>
                                            <td>
                                                <span className="sparkbar">7,5,9,3,5,2,5</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jack Bird</td>
                                            <td>
                                                <span className="sparkbar">10,8,1,3,3,8,7</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hughe L.</td>
                                            <td>
                                                <span className="sparkbar">2,8,9,8,5,1,5</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="header">
                                <h2><strong>Visits</strong> from countries</h2>
                            </div>
                            <div className="body">
                                <ul className="country-state list-unstyled">
                                    <li className="m-b-20">
                                        <h6>6350</h6>
                                        <small>From India</small>
                                        <div className="float-right">58%
                                            <i className="fa fa-level-up text-success"></i>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "58%" }}>
                                                <span className="sr-only">58% Complete</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="m-b-20">
                                        <h6>3250</h6>
                                        <small>From UAE</small>
                                        <div className="float-right">90%
                                            <i className="fa fa-level-up text-success"></i>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                                <span className="sr-only">90% Complete</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="m-b-20">
                                        <h6>1250</h6>
                                        <small>From Australia</small>
                                        <div className="float-right">70%
                                            <i className="fa fa-level-down text-danger"></i>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                                <span className="sr-only">70% Complete</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="m-b-10">
                                        <h6>1350</h6>
                                        <small>From USA</small>
                                        <div className="float-right">70%
                                            <i className="fa fa-level-up text-success"></i>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                                <span className="sr-only">70% Complete</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainContent