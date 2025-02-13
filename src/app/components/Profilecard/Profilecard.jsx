import { Camera } from "lucide-react";
import { email, linkedin, perfilUnd, telefone } from "../../../assets/images";
import { SocialLinks } from "../Sociallink/Sociallinks";
import { Link } from "react-router-dom";
import usePartners from "../../hooks/get_partners_by_id";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { PartnerItems } from "../PartnerItems/PartnerItems";

export const Profilecard = ({  enterprise, enterprise_id }) => {
    const {token} = useContext(AuthContext)
    const socios = usePartners(enterprise?.enterprise_id, token)
    return (
        <div className="card member-card">
            <div className="header l-cyan">
                <h4 className="m-t-10">{enterprise?.name || 'não encontrado'}</h4>
            </div>
            <div>
                
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
                        {/* <div className="cam-overlay">
                            <Camera className="cam" color='gray' size={48} />
                        </div>
                        <input
                            className="form-control input-overlay"
                            type="file"
                            id="formFile"
                            {...register('profile_picture')}
                            onChange={handleProfileImageChange}
                        /> */}
                    </label>
                </div>
            </div>
            <div className="body">
                <div>
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
            <div className="d-flex justify-content-center" style={{paddingBottom: "28px"}}>
                {
                    socios.map(
                        socio => ( 
                            <ul className="list-unstyled team-info m-b-0">
                                <PartnerItems token={token} id_partner={socio.user_id} />
                            </ul>
                        )
                    )
                }
            </div>
        </div>
    );
}