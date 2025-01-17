import React from "react";
import { summer, rain, cloudy, wind, simao, luciana, heygler, jerdeson, breno, logo } from "../../../assets/images";

const MainContent = () => {
    return (
        <section className="content">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>
                            Main page
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
                        <div className="card">
                            <div className="header">
                                <h2><strong>New</strong> Partners</h2>
                            </div>
                            <div className="body">
                                <ul className="new_friend_list list-unstyled row">
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={simao} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Simão Pedro</h6>
                                            <small className="join_date">Today</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={luciana} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Luciana Tsukada</h6>
                                            <small className="join_date">Yesterday</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={heygler} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Heygler</h6>
                                            <small className="join_date">12 Dec</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={jerdeson} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Jerdeson Lucas</h6>
                                            <small className="join_date">12 Dec</small>
                                        </a>
                                    </li>
                                    <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                        <a href="">
                                            <img src={breno} className="img-thumbnail" alt="User Image" />
                                            <h6 className="users_name">Breno Ramon</h6>
                                            <small className="join_date">17 Dec</small>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="card">
                            <div class="header">
                                <h2><strong>My</strong> Startups</h2>
                                <ul class="header-dropdown">
                                    <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                        <ul class="dropdown-menu dropdown-menu-right slideUp float-right">
                                            <li><a href="javascript:void(0);">Edit</a></li>
                                            <li><a href="javascript:void(0);">Delete</a></li>
                                            <li><a href="javascript:void(0);">Report</a></li>
                                        </ul>
                                    </li>
                                    <li class="remove">
                                        <a role="button" class="boxs-close"><i class="zmdi zmdi-close"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="body">
                                <div class="table-responsive social_media_table">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Logo</th>
                                                <th>Name</th>
                                                <th>Initial Market</th>
                                                <th>Team</th>
                                                <th>Acceleration Phase</th>
                                                <th>Next Meeting</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <img
                                                        className="rounded-circle"
                                                        src={logo}
                                                        width="48"
                                                        height="48" />
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Piauí, Brazil</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>14K</td>
                                                <td><span class="badge badge-info">Medium</span></td>
                                                <td>19 Mar 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <img
                                                        className="rounded-circle"
                                                        src={logo}
                                                        width="48"
                                                        height="48" />
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Massachusetts, United States</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>11K</td>
                                                <td><span class="badge badge-success">High</span></td>
                                                <td>17 Jan 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <img
                                                        className="rounded-circle"
                                                        src={logo}
                                                        width="48"
                                                        height="48" />
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">São Paulo, Brazil</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>18K</td>
                                                <td><span class="badge badge-info">Medium</span></td>
                                                <td>03 Mar 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <img
                                                        className="rounded-circle"
                                                        src={logo}
                                                        width="48"
                                                        height="48" />
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Arizona, United States</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>18K</td>
                                                <td><span class="badge badge-warning">Pading</span></td>
                                                <td>20 Fev 2025</td>
                                            </tr>
                                            <tr>
                                                <td><span className="zmdi-hc-spin">
                                                    <img
                                                        className="rounded-circle"
                                                        src={logo}
                                                        width="48"
                                                        height="48" />
                                                </span>
                                                </td>
                                                <td><span class="list-name">Startup Piauí</span>
                                                    <span class="text-muted">Lisboa, Portugal</span>
                                                </td>
                                                <td>Inovação e Tecnologia</td>
                                                <td>18K</td>
                                                <td><span class="badge badge-danger">Low</span></td>
                                                <td>25 Jan 2025</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card weather2">
                            <div class="city-selected body l-parpl">
                                <div class="row">
                                    <div class="info col-7">
                                        <div class="city"><span>City:</span> Teresina</div>
                                        <div class="night">Day - 12:07 PM</div>
                                        <div class="temp"><h2>34°</h2></div>
                                    </div>
                                    <div class="icon col-5">
                                        <img src={summer} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item text-center active">
                                        <div class="col-12">
                                            <ul class="row days-list list-unstyled">
                                                <li class="day col-4">
                                                    <p>Monday</p>
                                                    <img src={rain} alt="" />
                                                </li>
                                                <li class="day col-4">
                                                    <p>Tuesday</p>
                                                    <img src={cloudy} alt="" />
                                                </li>
                                                <li class="day col-4">
                                                    <p>Wednesday</p>
                                                    <img src={wind} alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="carousel-item text-center">
                                        <div class="col-12">
                                            <ul class="row days-list list-unstyled">
                                                <li class="day col-4">
                                                    <p>Thursday</p>
                                                    <img src="assets/images/weather/sky.svg" alt="" />
                                                </li>
                                                <li class="day col-4">
                                                    <p>Friday</p>
                                                    <img src="assets/images/weather/cloudy.svg" alt="" />
                                                </li>
                                                <li class="day col-4">
                                                    <p>Saturday</p>
                                                    <img src="assets/images/weather/summer.svg" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-12">
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
                    </div> */}

                    <div role="tabpanel" className="col-md-12 col-lg-8">
                        <ul className="cbp_tmtimeline">
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-04T18:30"><span className="hidden">25/12/2017</span> <span className="large">Now</span></time>
                                <div className="cbp_tmicon"><i className="zmdi zmdi-account"></i></div>
                                <div className="cbp_tmlabel empty"> <span>No Activity</span> </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-04T03:45"><span>03:45 AM</span> <span>Today</span></time>
                                <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-label"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Art Ramadani</a> <span>posted a status update</span></h2>
                                    <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-03T13:22"><span>01:22 PM</span> <span>Yesterday</span></time>
                                <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Job Meeting</a></h2>
                                    <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                                <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Arlind Nushi</a> <span>checked in at</span> <a href="javascript:void(0);">New York</a></h2>
                                    <blockquote>
                                        <p className="blockquote blockquote-primary">
                                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                            <br />
                                            <small>
                                                - Isabella
                                            </small>
                                        </p>
                                    </blockquote>
                                    <div className="row clearfix">
                                        <div className="col-lg-12">
                                            <div className="map m-t-10">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477011208!2d-74.11976308802028!3d40.69740344230033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1508039335245" frameborder="0" style={{ border: 0, width: '100%' }} allowfullscreen=""></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                                <div className="cbp_tmicon bg-orange"><i className="zmdi zmdi-camera"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Eroll Maxhuni</a> <span>uploaded</span> 4 <span>new photos to album</span> <a href="javascript:void(0);">Summer Trip</a></h2>
                                    <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image1.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image2.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image3.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                        <div className="col-lg-3 col-md-6 col-6"><a href="javascript:void(0);"><img src="assets/images/image4.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></a> </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-11-03T13:22"><span>01:22 PM</span> <span>Two weeks ago</span></time>
                                <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Job Meeting</a></h2>
                                    <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                </div>
                            </li>
                            <li>
                                <time className="cbp_tmtime" datetime="2017-10-22T12:13"><span>12:13 PM</span> <span>Month ago</span></time>
                                <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                                <div className="cbp_tmlabel">
                                    <h2><a href="javascript:void(0);">Arlind Nushi</a> <span>checked in at</span> <a href="javascript:void(0);">Laborator</a></h2>
                                    <blockquote>Great place, feeling like in home.</blockquote>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="col-md-12 col-lg-4">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default MainContent