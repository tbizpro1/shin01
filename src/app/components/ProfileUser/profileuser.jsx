import React from "react";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { email, linkedin, perfilUnd, telefone } from "../../../assets/images";

export function ProfileUser() {
    const { user } = useContext(AuthContext)
    return (
        <div className="card member-card">
                            <div className="header l-cyan">
                                <h4 className="m-t-10">{user?.username || 'Não encontrado'}</h4>
                            </div>
                            <div className="member-img">
                                <img src={user?.profile_picture || perfilUnd} className="rounded-circle" alt="profile-image" />
                            </div>
                            <div className="body">
                                <div>
                                    <ul className="social-links list-unstyled align-items-center">
                                        <li className='mx-3'>
                                            <a href="" title="mail">
                                                {/* <Mail size={28} /> */}
                                                <img src={email} alt="" style={{ width: '32px', height: '32px' }} />
                                            </a>
                                        </li>
                                        <li className='mx-3'>
                                            <a href="" title="phone">
                                                {/* <Phone size={28} /> */}
                                                <img src={telefone} alt="" style={{ width: '32px', height: '32px' }} />
                                            </a>
                                        </li>
                                        <li className='mx-3'>
                                            <a href="" title="linkedin">
                                                {/* <Linkedin size={28} /> */}
                                                <img src={linkedin} alt="" style={{ width: '32px', height: '32px' }} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div style={{ padding: '4px' }}>
                                        <a href="/" ><strong><span className="profileButton">Acessar meu perfil</span></strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}