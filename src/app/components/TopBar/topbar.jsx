import React from "react";
import { logoLoader } from "../../../assets/images";

const TopBar = () => {
    return (
      <nav className="navbar">
        <div className="col-12">
          <div className="navbar-header">
            <a href="#" className="bars"></a>
            <a className="navbar-brand" href="/workspace">
              <img src={logoLoader} width="30" alt="Shin" />
              <span 
              className="m-l-10"
              >SHIN
              </span>
            </a>
          </div>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <a href="#" className="ls-toggle-btn" data-close="true">
                <i className="zmdi zmdi-swap"></i>
              </a>
            </li>
            <li className="hidden-sm-down">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-search"></i>
                </span>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                <i className="zmdi zmdi-notifications"></i>
                <div className="notify">
                  <span className="heartbit"></span>
                  <span className="point"></span>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-right slideDown">
                <li className="header">NOTIFICATIONS</li>
                <li className="body">
                  <ul className="menu list-unstyled">
                    <li>
                      <a href="#">
                        <div className="icon-circle bg-blue">
                          <i className="zmdi zmdi-account"></i>
                        </div>
                        <div className="menu-info">
                          <h4>8 New Members joined</h4>
                          <p>
                            <i className="zmdi zmdi-time"></i> 14 mins ago
                          </p>
                        </div>
                      </a>
                    </li>
                    {/* Adicione aqui os outros itens de notificação conforme necessário */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View All Notifications</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                <i className="zmdi zmdi-flag"></i>
                <div className="notify">
                  <span className="heartbit"></span>
                  <span className="point"></span>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-right slideDown">
                <li className="header">TASKS</li>
                <li className="body">
                  <ul className="menu tasks list-unstyled">
                    <li>
                      <a href="#">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge">Footer display issue</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-warning"
                              role="progressbar"
                              aria-valuenow="86"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "86%" }}
                            >
                              <span className="progress-value">86%</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Adicione aqui outros itens de tarefas conforme necessário */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View All</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="fullscreen hidden-sm-down" data-provide="fullscreen" data-close="true">
                <i className="zmdi zmdi-fullscreen"></i>
              </a>
            </li>
            <li>
              <a href="/" className="mega-menu" data-close="true">
                <i className="zmdi zmdi-power"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="js-right-sidebar" data-close="true">
                <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default TopBar;  