import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { perfilUnd, profileUser } from "../../../assets/images";

const LeftSideBarAdmin = () => {
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
                                    <img className="image" style={{ height: "80px" }} src={user?.profile_picture || perfilUnd} alt="User" />
                                </Link>
                            </div>
                            <div className="detail">
                                <h4>{user?.username || 'Usuário não definido'}</h4>

                                <small>{user?.profession || ''}</small>
                            </div>
                                <a href=""><i class="fa-solid fa-list-check"></i><span>Admin</span></a>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default LeftSideBarAdmin;