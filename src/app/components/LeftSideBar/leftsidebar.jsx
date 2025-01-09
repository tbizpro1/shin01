import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { profileUser } from "../../../assets/images";

const LeftSideBar = () => { //desestruturacao props: o componente usa {user} para acessar diretamente as propriedades passadas
    const [menuClicado, setMenuCliclado] = useState(false) //estado para controle de colapso

    const handleMenuCliclado = () => {
        setMenuCliclado(!menuClicado); //inverte o estado atual
    }


    const {user, enterprise} = useContext(AuthContext)

    console.log(enterprise)

    return (
        <aside id="leftsidebar" className="sidebar">
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info">
                            <div className="image">
                                <Link to="/perfil">
                                    <img src={profileUser} alt="User" />
                                </Link>
                            </div>
                            <div className="detail">
                                {/* validacao condicional de user: evita erros em casos undefined ou null */}
                                <h4>{user?.username || 'Usuário não definido'}</h4> 

                                <small>{user.profession} | {enterprise[0]?.enterprise_name || 'Usuário não definido'}</small>
                                {/* <small>{user.profession} | {'Usuário não definido'}</small> */}
                            </div>
                            <a href="#" title="Events"><i className="zmdi zmdi-calendar"></i></a>
                            <a href="#" title="Inbox"><i className="zmdi zmdi-email"></i></a>
                            <a href="#" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a>
                            <a href="#" title="Chat App"><i className="zmdi zmdi-comments"></i></a>
                            <a href="/" title="Sign out"><i className="zmdi zmdi-power"></i></a>
                        </div>
                    </li>

                    <li> 
                        <a href="#" 
                        className={`menu-toggle waves-effect waves-block ${menuClicado ? 'toggled' : ''}`}
                        onClick={handleMenuCliclado}
                        >
                            <i className="zmdi zmdi-accounts-outline"></i><span>Sócios</span>
                        </a>
                        <ul className="ml-menu" style={{display: menuClicado ? 'block' : 'none'}}>
                            <li><Link to='/socio'>Todos os sócios</Link></li>
                            <li><Link to='/addsocio'>Adicionar sócio</Link></li>
                            <li><Link to='/perfil'>Perfil do sócio</Link></li>
                            <li><Link to='/explorer'>Convidar sócio</Link></li>

                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default LeftSideBar;