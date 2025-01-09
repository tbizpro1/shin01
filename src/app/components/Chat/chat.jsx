import React, {useState} from "react";

const Chat = () => {
    const [active, setActive] = useState(false)
    // $('.chat-launcher').toggleclassName('active');
    // $('.chat-wrapper').toggleclassName('is-open');
    console.log(active)
    return (
        <div onClick={() => setActive(!active)} className = {`chat-launcher ${active && 'active'}`}>
            <div className={`chat-wrapper ${active && 'is-open'}`}>
                <div className="card">
                    <div className="header">
                        <ul className="list-unstyled team-info margin-0">
                            <li className="m-r-15"><h2>Agent Team</h2></li>
                            <li>
                                <img src="src/assets/images/xs/avatar2.jpg" alt="Avatar" />
                            </li>
                            <li>
                                <img src="src/assets/images/xs/avatar3.jpg" alt="Avatar" />
                            </li>
                            <li>
                                <img src="src/assets/images/xs/avatar4.jpg" alt="Avatar" />
                            </li>
                            <li>
                                <img src="src/assets/images/xs/avatar6.jpg" alt="Avatar" />
                            </li>
                            <li>
                                <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="chat-widget">
                            <ul className="chat-scroll-list clearfix" />
                            <li className="left float-left">
                                <img src="src/assets/images/xs/avatar3.jpg" className="rounded-circle" alt="" />
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
                                <img src="src/assets/images/xs/avatar2.jpg" className="rounded-circle" alt="" />
                                <div className="chat-info">
                                    <a className="name" href="#">Elizabeth</a>
                                    <span className="datetime">6:25</span>
                                    <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span>
                                </div>
                            </li>
                            <li className="left float-left"> <img src="assets/images/xs/avatar1.jpg" className="rounded-circle" alt="" />
                                <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                            </li>
                            <li className="right">
                                <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                            </li>
                        </div>
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
    )
}

export default Chat