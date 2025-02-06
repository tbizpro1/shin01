import React, { useContext, useEffect, useState } from "react";
import { Subheader } from "../HeaderCard/Subheader";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import { PartenrsCard } from "../Partnerscard/Partnerscard";
import { Profilecard } from "../Profilecard/Profilecard";
import { CardMainStartup } from "../CardMainStartup/cardmainstartup";
import Calendario from "../Caledario/Calendario";
import { DataStartup } from "../DataStartup/datastartup";
import { ActivitiesList } from "../ActivitiesList/activities";

export function ContentStartupHome({ enterprise }) {
    // const[enterpriseDetail, setEnterpriseDetail] = useState()
    const { user, token } = useContext(AuthContext)
    const { register } = useForm()
    console.log("aqui", enterprise)

    const enterprise_id = enterprise?.enterprise_id

    return (
        <>
            <Subheader
                title={'Perfil da startup'}
                description={'Gerencie as informações da startup!'}
            />
            <section className="container-fluid">
                <DataStartup />
    
                <div className="d-flex flex-lg-row flex-column">
                    {/* Primeiro elemento: ocupa 33,33% da largura em telas grandes */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12 me-lg-3 mb-3 mb-lg-0">
                        <Profilecard
                            enterprise={enterprise}
                            enterprise_id={enterprise_id}
                            user={user}
                        />
                    </div>
                    {/* Segundo elemento: ocupa 66,66% da largura em telas grandes */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-8 col-md-12">
                        <CardMainStartup />
                    </div>
    
                </div>
                <div className="d-flex flex-lg-row flex-column">
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <PartenrsCard enterprise_id={enterprise_id} token={token} />
                    </div>
                    {/* calendario */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <Calendario />
                    </div>
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <ActivitiesList />
                    </div>
                </div>
            </section>
        </>
    )
}
