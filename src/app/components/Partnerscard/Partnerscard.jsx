import { heygler, jerdeson, luciana, simao } from "../../../assets/images";

export function PartenrsCard() {
    return(
        <div>
                <div className="card ">
                    <div className="header">
                        <h2><strong>Equipe</strong></h2>
                    </div>
                    <div className="body">
                        <ul className="inbox-widget list-unstyled clearfix">
                            <li className="inbox-inner">
                                <a href="#">
                                    <div className="inbox-item">
                                        <div className="inbox-img"> <img src={simao} className="rounded" alt="" /> </div>
                                        <div className="inbox-item-info">
                                            <p className="author">Simão Pedro</p>
                                            <p className="inbox-message">Design</p>
                                            <p className="inbox-date">12:34 PM</p>
                                        </div>
                                        <div className="hover_action">
                                            <a href="#"><i className="zmdi zmdi-favorite"></i></a>
                                            <a href="#"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="#"><i className="zmdi zmdi-check-circle"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="inbox-inner">
                                <a href="#">
                                    <div className="inbox-item">
                                        <div className="inbox-img"> <img src={luciana} className="rounded" alt="" /> </div>
                                        <div className="inbox-item-info">
                                            <p className="author">Luciana Tsukada</p>
                                            <p className="inbox-message">CEO</p>
                                            <p className="inbox-date">10:34 AM</p>
                                        </div>
                                        <div className="hover_action">
                                            <a href="#"><i className="zmdi zmdi-favorite"></i></a>
                                            <a href="#"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="#"><i className="zmdi zmdi-check-circle"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="inbox-inner">
                                <a href="#">
                                    <div className="inbox-item">
                                        <div className="inbox-img"> <img src={jerdeson} className="rounded" alt="" /> </div>
                                        <div className="inbox-item-info">
                                            <p className="author">Jerdeson</p>
                                            <p className="inbox-message">Customer Success</p>
                                            <p className="inbox-date">15:34 PM</p>
                                        </div>
                                        <div className="hover_action">
                                            <a href="#"><i className="zmdi zmdi-favorite"></i></a>
                                            <a href="#"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="#"><i className="zmdi zmdi-check-circle"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="inbox-inner">
                                <a href="#">
                                    <div className="inbox-item">
                                        <div className="inbox-img"> <img src={heygler} className="rounded" alt="" /> </div>
                                        <div className="inbox-item-info">
                                            <p className="author">Heygler</p>
                                            <p className="inbox-message">COO</p>
                                            <p className="inbox-date">11:10 AM</p>
                                        </div>
                                        <div className="hover_action">
                                            <a href="#"><i className="zmdi zmdi-favorite"></i></a>
                                            <a href="#"><i className="zmdi zmdi-edit"></i></a>
                                            <a href="#"><i className="zmdi zmdi-check-circle"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
};
