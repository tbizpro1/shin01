import { Camera } from "lucide-react";
import { perfilUnd } from "../../../assets/images";
import { SocialLinks } from "../Sociallink/Sociallinks";

export const Profilecard = ({ handleProfileImageChange, register, enterprise, user }) => {
    // console.log("teste", enterprise)
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
                <div className="col-8">
                    <h3>Resumo</h3>
                    <input 
                        type="text"
                        className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                        placeholder="" />
                </div>
            </div>

            {/* <div className="body">
                <div className="col-12">
                    <SocialLinks />
                    <p className="text-muted">
                        <h5 className='m-t-10'>{user?.city + ', ' + user?.state + ", " + user?.cep || 'informação não encontrada'}</h5>
                    </p>
                </div>
            </div> */}
        </div>
    );
}