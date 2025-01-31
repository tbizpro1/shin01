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

import { enterpriseUnd } from "../../../assets/images";
import updateDetailsStartup from "../../api/put/update-details-startup";
import CardDetails from "../CardDetails/CardDetails";

import { ProfilecardStartup } from "../ProfilecardStartup/profilecardstartup";


export function ContentStartup() {
    const { user, token, enterprise } = useContext(AuthContext)
    const [enterpriseDetail, setEnterpriseDetail] = useState("")

    const enterprise_id = enterprise?.[0]?.enterprise_id

    
    console.log("eeee",enterpriseDetail)
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            ...enterpriseDetail
        }
    })

    useEffect(() => {
        if (enterprise_id && token) {
            getEnterpriseById(enterprise_id, token).then(response => {
                setEnterpriseDetail(response);
                reset({
                    ...response,
                    file: response?.file || enterpriseUnd,
                });
            });
        }
    }, [enterprise_id, token, reset]);

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

    useEffect(() => {
        if (enterpriseDetail) {
            reset({
                ...enterpriseDetail,
                file: enterpriseDetail?.file ||   enterpriseUnd,
            });
        }
    }, [enterpriseDetail, reset])

    const onSubmit = (data) => {
        if(!data.file){
            data.file = enterpriseUnd
        }
        console.log(data)
        updateDetailsStartup(enterprise_id, data, token)
            .then((response) => {
                console.log("Resposta da API:", response);
                // window.location.reload();
            })
            .catch((error) => {
                console.log("Erro ao atualizar o usuário:", error);
            });
    }
    return (
        <>
            <Subheader
                title={'Perfil da startup'}
                description={'Gerencie as informações da startup!'}
            />
            <div className="container-fluid">

                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-lg-4 col-md-12">
                        <Profilecard register={register} enterprise={enterpriseDetail} />
                        <CardDetails/>
                        <PartenrsCard enterprise_id={enterprise_id} token={token}/>
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <StartupSettings register={register} control={control} />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <FomentSettings register={register} control={control} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 d-flex justify-content-end">
                                <div className="d-lg-flex gap-2">
                                    <button
                                        // type="button"
                                        className="btn btn-round"
                                        style={{ backgroundColor: "#00bcd4", borderColor: "#00bcd4" }}
                                    >
                                        Exportar PDF
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-round"
                                    >
                                        Salvar mudanças
                                    </button>
                                </div>
                            </div>
                        </div>
                </form> 
            </div>


            

        </>
    )
}
