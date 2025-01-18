import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { perfilUnd, profileUser } from "../../../assets/images";

const LeftSideBar = () => {
    const [menuClicado, setMenuCliclado] = useState(false)

    const handleMenuCliclado = () => {
        setMenuCliclado(!menuClicado);
    }


    const { user, enterprise, isLoading, logout } = useContext(AuthContext);

    if (isLoading) {
        return <div>Carregando ...</div>;
    }

    if (!user || !enterprise) {
        return <div>Algo ocorreu!</div>;
    }

    return (
        <aside id="leftsidebar" className="sidebar">
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info">
                            <div className="image">
                                <Link to="/perfil">
                                    <img className="image" style={{height:"80px"}} src={user?.profile_picture || perfilUnd} alt="User" />
                                </Link>
                            </div>
                            <div className="detail">
                                <h4>{user?.username || 'Usuário não definido'}</h4>

                                <small>{user?.profession || ''}  {enterprise[0]?.enterprise_name === undefined ? '' : enterprise[0]?.enterprise_name}</small>
                            </div>
                            <a href="#" title="Events"><i className="zmdi zmdi-calendar"></i></a>
                            <a href="#" title="Inbox"><i className="zmdi zmdi-email"></i></a>
                            <a href="#" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a>
                            <a href="#" title="Chat App"><i className="zmdi zmdi-comments"></i></a>
                            <a href="" onClick={() => logout()} title="Sign out"><i className="zmdi zmdi-power"></i></a>
                        </div>
                    </li>


                    <li>
                        <li><a href="/workspace"><i class="zmdi zmdi-home"></i><span>Home</span></a></li>
                        <li><a href="/perfil"><i class="zmdi zmdi-account-o"></i><span>Meu Perfil</span></a></li>
                        <a href="#"
                            className={`menu-toggle waves-effect waves-block ${menuClicado ? 'toggled' : ''}`}
                            onClick={handleMenuCliclado}
                        >
                            <i className="zmdi zmdi-accounts-outline"></i><span>Sócios</span>
                        </a>
                        <ul className="ml-menu" style={{ display: menuClicado ? 'block' : 'none' }}>
                            <li><Link to='/socio'>Todos os sócios</Link></li>
                            <li><Link to='/addsocio'>Adicionar sócio</Link></li>
                            <li><Link to='/perfil'>Perfil do sócio</Link></li>
                            <li><Link to='/explorer'>Convidar sócio</Link></li>
                            {/* <li><Link to='/notifications'>Notificações</Link></li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default LeftSideBar;