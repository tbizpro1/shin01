import React from "react";
const MyPosts = () => {
    return (
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane blog-page active" id="mypost">
                <div className="card single_post">
                    <div className="body">
                        <h3 className="m-t-0 m-b-5"><a href="blog-details.html">All photographs are accurate. None of them is the truth</a></h3>
                        <ul className="meta">
                            <li><a href="#"><i className="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                            <li><a href="#"><i className="zmdi zmdi-label col-red"></i>Photography</a></li>
                            <li><a href="#"><i className="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="img-post m-b-15">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src="assets/images/blog/blog-page-1.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="assets/images/blog/blog-page-2.jpg" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src="assets/images/blog/blog-page-3.jpg" alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="social_share">
                                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook"></i></button>
                                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter"></i></button>
                                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram"></i></button>
                            </div>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>
                    </div>
                </div>
                <div className="card single_post">
                    <div className="body">
                        <h3 className="m-t-0 m-b-5"><a href="blog-details.html">Apple Introduces Search Ads Basic</a></h3>
                        <ul className="meta">
                            <li><a href="#"><i className="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                            <li><a href="#"><i className="zmdi zmdi-label col-amber"></i>Technology</a></li>
                            <li><a href="#"><i className="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="img-post m-b-15">
                            <img src="assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />
                            <div className="social_share">
                                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook"></i></button>
                                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter"></i></button>
                                <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram"></i></button>
                            </div>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12">
                        <div className="card single_post">
                            <div className="body">
                                <h3 className="m-t-0 m-b-5"><a href="blog-details.html">WTCR from 2018: new rules, more cars, more races</a></h3>
                                <ul className="meta">
                                    <li><a href="#"><i className="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-label col-lime"></i>Sports</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                                </ul>
                            </div>
                            <div className="body">
                                <div className="img-post m-b-15">
                                    <img src="assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />
                                    <div className="social_share">
                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook"></i></button>
                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter"></i></button>
                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram"></i></button>
                                    </div>
                                </div>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old</p>
                                <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card single_post">
                            <div className="body">
                                <h3 className="m-t-0 m-b-5"><a href="blog-details.html">CSS Timeline Examples from CodePen</a></h3>
                                <ul className="meta">
                                    <li><a href="#"><i className="zmdi zmdi-account col-blue"></i>Posted By: John Smith</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-label col-green"></i>Web Design</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-comment-text col-blue"></i>Comments: 3</a></li>
                                </ul>
                            </div>
                            <div className="body">
                                <div className="img-post m-b-15">
                                    <img src="assets/images/blog/blog-page-4.jpg" alt="Awesome Image" />
                                    <div className="social_share">
                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook"></i></button>
                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter"></i></button>
                                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram"></i></button>
                                    </div>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="pagination pagination-primary">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </div>
        </div>
    )
}
export default MyPosts