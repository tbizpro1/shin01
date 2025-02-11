import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { Subheader } from "../HeaderCard/Subheader";
import { Profilecard } from "../Profilecard/Profilecard";
import { PartenrsCard } from "../Partnerscard/Partnerscard";
import { DataStartup } from "../DataStartup/datastartup";
import { CardData } from "../DataSelect/dataselect";
import UserSettings from "../UserSettings/usersettings";

export function ContentData({ enterprise }) {
    // const[enterpriseDetail, setEnterpriseDetail] = useState()
    const [activeTab, setActiveTab] = useState('update')
    const { user, token } = useContext(AuthContext)
    const { register } = useForm()

    console.log("aqui", enterprise) //verificar o valor de enterprise

    const enterprise_id = enterprise?.enterprise_id
    console.log("mais um: ", enterprise_id)
    // const enterprise_id = enterprise.enterprise_id || "ID não disponível"



    return (
        <>
            <Subheader
                title={'Dados da startup'}
                description={'Gerencie os dados da startup!'}
            />
            <section className="container-fluid">

                <DataStartup />
                {/* container flexível */}
                {/* wrapper para posicionar os componentes lado a lado */}
                <div className="row">
                    {/* Primeiro elemento: ocupa 33,33% da largura em telas grandes */}
                    <div className="col-lg-4 col-md-12 mb-3 mb-lg-0">
                        <div className="d-flex flex-column">
                            <div className="mb-3">
                                <Profilecard
                                    enterprise={enterprise || {}}
                                    enterprise_id={enterprise_id}
                                    user={user}
                                />
                            </div>
                            <PartenrsCard enterprise_id={enterprise_id} token={token} />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
<<<<<<< HEAD
                        <CardData activeTab={activeTab} setActiveTab={setActiveTab} />
=======
                        <CardData activeTab={activeTab}  setActiveTab={setActiveTab}/>
                    </div>
                </div>
                <div className="d-flex flex-lg-row flex-column">
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <PartenrsCard enterprise_id={enterprise_id} token={token} />
>>>>>>> 63fec0f5045147c14a82b1a3986d41a1155b2fa0
                    </div>
                </div>
            </section>
        </>
    )
}