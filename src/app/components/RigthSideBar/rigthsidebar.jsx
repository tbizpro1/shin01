import React from "react";

const RightSideBar = () => (
    <aside id="rightsidebar" className="right-sidebar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#setting">
            <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#chat">
            <i className="zmdi zmdi-comments"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#activity">
            Activity
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active slideRight" id="setting">
          <div className="slim_scroll">
            <div className="card">
              <h6>Skins</h6>
              <ul className="choose-skin list-unstyled">
                <li data-theme="purple">
                  <div className="purple"></div>
                </li>
                <li data-theme="blue">
                  <div className="blue"></div>
                </li>
                <li data-theme="cyan" className="active">
                  <div className="cyan"></div>
                </li>
                <li data-theme="green">
                  <div className="green"></div>
                </li>
                <li data-theme="orange">
                  <div className="orange"></div>
                </li>
                <li data-theme="blush">
                  <div className="blush"></div>
                </li>
              </ul>
            </div>
            <div className="card">
              <h6>Left Menu</h6>
              <ul className="list-unstyled theme-light-dark">
                <li>
                  <div className="t-light btn btn-default btn-simple btn-round">Light</div>
                </li>
                <li>
                  <div className="t-dark btn btn-default btn-round">Dark</div>
                </li>
              </ul>
            </div>
            <div className="card">
              <h6>General Settings</h6>
              <ul className="setting-list list-unstyled">
                <li>
                  <div className="checkbox">
                    <input id="checkbox1" type="checkbox" />
                    <label htmlFor="checkbox1">Report Panel Usage</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox">
                    <input id="checkbox2" type="checkbox" defaultChecked />
                    <label htmlFor="checkbox2">Email Redirect</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox">
                    <input id="checkbox3" type="checkbox" defaultChecked />
                    <label htmlFor="checkbox3">Notifications</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox">
                    <input id="checkbox4" type="checkbox" defaultChecked />
                    <label htmlFor="checkbox4">Auto Updates</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card">
              <h6>Account Settings</h6>
              <ul className="setting-list list-unstyled">
                <li>
                  <div className="checkbox">
                    <input id="checkbox5" type="checkbox" defaultChecked />
                    <label htmlFor="checkbox5">Offline</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox">
                    <input id="checkbox6" type="checkbox" defaultChecked />
                    <label htmlFor="checkbox6">Location Permission</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane right_chat pullUp" id="chat">
          <div className="slim_scroll">
            <div className="card">
              <div className="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-search"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <h6>Recent</h6>
              <ul className="list-unstyled">
                {/* Add JSX for Recent Chats */}
              </ul>
            </div>
            <div className="card">
              <h6>Contacts</h6>
              <ul className="list-unstyled">
                {/* Add JSX for Contacts */}
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane slideRight" id="activity">
          <div className="...">
            {/* Add JSX for Activity */}
          </div>
        </div>
      </div>
    </aside>
  );  

  export default RightSideBar