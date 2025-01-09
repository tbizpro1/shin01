import React from "react";

export default function Socios(){
    return(
        <div className="tab-pane body" id="friends">
                            <ul className="new_friend_list list-unstyled row">
                                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                    <a href="">
                                        <img src="assets/images/sm/avatar1.jpg" className="img-thumbnail" alt="User Image" />
                                        <h6 className="users_name">Jackson</h6>
                                        <small className="join_date">Today</small>
                                    </a>
                                </li>
                                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                    <a href="">
                                        <img src="assets/images/sm/avatar2.jpg" className="img-thumbnail" alt="User Image" />
                                        <h6 className="users_name">Aubrey</h6>
                                        <small className="join_date">Yesterday</small>
                                    </a>
                                </li>
                                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                    <a href="">
                                        <img src="assets/images/sm/avatar3.jpg" className="img-thumbnail" alt="User Image" />
                                        <h6 className="users_name">Oliver</h6>
                                        <small className="join_date">08 Nov</small>
                                    </a>
                                </li>
                                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                    <a href="">
                                        <img src="assets/images/sm/avatar4.jpg" className="img-thumbnail" alt="User Image" />
                                        <h6 className="users_name">Isabella</h6>
                                        <small className="join_date">12 Dec</small>
                                    </a>
                                </li>
                                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                    <a href="">
                                        <img src="assets/images/sm/avatar1.jpg" className="img-thumbnail" alt="User Image" />
                                        <h6 className="users_name">Jacob</h6>
                                        <small className="join_date">12 Dec</small>
                                    </a>
                                </li>
                                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                                    <a href="">
                                        <img src="assets/images/sm/avatar5.jpg" className="img-thumbnail" alt="User Image" />
                                        <h6 className="users_name">Matthew</h6>
                                        <small className="join_date">17 Dec</small>
                                    </a>
                                </li>                            
                            </ul>
                        </div> 
    )
}