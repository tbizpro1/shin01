import React, { useContext, useEffect, useState } from "react";
import { Subheader } from "../HeaderCard/Subheader";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import addProfileImage from "../../api/post/profile-image";
import getEnterpriseById from "../../api/get/get-enterprise-by-id";
import { PartenrsCard } from "../Partnerscard/Partnerscard";
import { Profilecard } from "../Profilecard/Profilecard";
import { AboutCard } from "../AboutCard/AboutCard";
import StartupSettings from "../StartupSettings/StartupSettings";
import FomentSettings from "../StartupSettings/FomentSettings";
import { ProfilecardStartup } from "../ProfilecardStartup/profilecardstartup";

export function ContentStartup() {
    const { user, token, enterprise } = useContext(AuthContext)
    const [enterpriseDetail, setEnterpriseDetail] = useState("")
    const { register } = useForm()

    const enterprise_id = enterprise?.[0]?.enterprise_id

    useEffect(() => {
        getEnterpriseById(enterprise_id, token).then(response =>
            setEnterpriseDetail(response)
        )
    }, [enterprise, token, enterprise_id])


    const handleProfileImageChange = async (e) => {
        const file = e?.target?.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("profile_picture", file);

            const response = await addProfileImage(user?.id, token, formData);

            if (response) {
                console.log('Imagem de perfil atualizada com sucesso', response);
            }
        }
        window.location.reload();
    };
    return (
        <>
            <Subheader
                title={'Perfil da startup'}
                description={'Gerencie as informações da startup!'}
            />
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                        <ProfilecardStartup
                            handleProfileImageChange={handleProfileImageChange}
                            register={register}
                            enterprise={enterpriseDetail}
                            user={user}
                        />
                        {/* <AboutCard/> */}
                        <PartenrsCard />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <StartupSettings enterprise={enterpriseDetail} />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <FomentSettings enterprise={enterpriseDetail} />
                    </div>
                </div>
            </div>
        </>
    )
}
