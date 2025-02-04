
import { Camera, Linkedin, Mail, Phone } from "lucide-react";
// import { perfilUnd } from "../../../assets/images";

// import { Camera } from "lucide-react";
import { email, linkedin, perfilUnd, telefone } from "../../../assets/images";

import { SocialLinks } from "../Sociallink/Sociallinks";
import { useForm } from "react-hook-form";
import profileImageStartup from "../../api/post/profile-image-startup";

export const ProfileCArdImageStartup = ({ enterprise, enterprise_id, token, register}) => {
    const handleProfileImageChange = async (e) => {
            console.log("testando")
            const file = e?.target?.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                console.log([...formData])
                const response = await profileImageStartup(enterprise_id, formData, token).finally(() => window.location.reload());
        
                if (response) {
                console.log('Imagem de perfil atualizada com sucesso', response);
                }
            }
        };
    
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
                                {...register('file')}
                                onChange={handleProfileImageChange}
                            />
                        </label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <div className="header_helper_1">
                        <h2 style={{fontSize: ".8rem"}}><strong>RESUMO</strong></h2>
                    </div>
                    <div className="body">
                        <div className="col-14">
                            <textarea
                                {...register("summary")}
                                type="text"
                                className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled_helper"
                                placeholder="Resumo da startup ..." 
                                rows={2}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex align-items-center gap-1">
                            <Mail color="orange" size={18} />
                            <p className="mb-0" style={{fontSize:".7rem", fontWeight:800}}>{enterprise?.email || "enum@gmail.com"}</p>
                        </div>
                        
                        <div className="d-flex align-items-center gap-2">
                            <Phone color="orange" size={18} />
                            <p className="mb-0" style={{fontSize:".7rem", fontWeight:800}}>{enterprise?.whatsapp || "(00) 00000-0000"}</p>
                        </div>
                        
                        <div className="d-flex align-items-center gap-2">
                            <Linkedin color="orange" size={18} />
                            <p className="mb-0" style={{ fontSize: ".7rem", fontWeight: 800 }}>
                                {enterprise?.linkedin
                                    ? enterprise.linkedin.length > 20
                                    ? `${enterprise.linkedin.slice(0, 20)}...`
                                    : enterprise.linkedin
                                    : "___"}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 helper">
                        <p className="text-muted">
                            CNPJ
                        </p>
                        <span className=""><strong>{enterprise?.cnpj || "___"}</strong></span>
                        <p className="text-muted">
                            Data de fundação
                        </p>
                        <span className=""><strong>{enterprise?.foundation_year || "___"}</strong></span>
                        <p className="text-muted">
                            Localização
                        </p>
                        <span className=""><strong>{enterprise?.city+enterprise?.state || "___"}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}