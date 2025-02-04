import { Camera } from "lucide-react";
import { email, linkedin, perfilUnd, telefone } from "../../../assets/images";
import { SocialLinks } from "../Sociallink/Sociallinks";
import { Link } from "react-router-dom";

export const Profilecard = ({ handleProfileImageChange, register, enterprise, enterprise_id }) => {
    return (
        <div className="card member-card">
            <div className="header l-cyan">
                <h4 className="m-t-10">{enterprise?.name || 'não encontrado'}</h4>
            </div>
            <div className="member-img">
                <div className="member-card">
                    <label htmlFor="formFile" className="member-img">
                        <div className="image-profile">
                            <img
                                src={enterprise?.profile_picture || perfilUnd}
                                className="rounded-circle"
                                alt="profile-image"
                            />
                        </div>
                        <div className="cam-overlay">
                            <Camera className="cam" color='gray' size={48} />
                        </div>
                        <input
                            className="form-control input-overlay"
                            type="file"
                            id="formFile"
                            {...register('profile_picture')}
                            onChange={handleProfileImageChange}
                        />
                    </label>
                </div>
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

                        <Link 
                            to={"/startup"}
                            key={enterprise_id} 
                            state={{ enter: enterprise }}
                        >   
                            <strong>
                                <span className="profileButton">Acessar informações</span>
                            </strong>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}