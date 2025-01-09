import React from "react";

const Timeline = () => {
    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="timeline">
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
    )
}

export default Timeline