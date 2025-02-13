import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { Subheader } from "../HeaderCard/Subheader";
import { Profilecard } from "../Profilecard/Profilecard";
import { PartenrsCard } from "../Partnerscard/Partnerscard";
import { DataStartup } from "../DataStartup/datastartup";
import { CardData } from "../DataSelect/dataselect";
import UserSettings from "../UserSettings/usersettings";
import { PartnerItems } from "../PartnerItems/PartnerItems";

export function ContentData({ enterprise }) {
    // const[enterpriseDetail, setEnterpriseDetail] = useState()
    const [activeTab, setActiveTab] = useState('update')
    const { user, token } = useContext(AuthContext)
    const { register } = useForm()

    // console.log("aqui", enterprise) //verificar o valor de enterprise

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
                    <div className="col-lg-12 col-md-12 mb-3 mb-lg-0">
                        <div className="d-flex">
                            <div className="mb-3 col-lg-6">
                                <Profilecard
                                    enterprise={enterprise || {}}
                                    enterprise_id={enterprise_id}
                                    user={user}
                                />
                            </div>
                            <div className="col-lg-6">
                                <PartnerItems enterprise_id={enterprise_id} token={token} />
                                {/* <ul className="list-unstyled team-info m-b-0">
                                                    {
                                                        parters.map((partner) => <PartnerItems token={token} id_partner={partner.user_id} src={partner?.profile_picture}/>)
                                                    }
                                                </ul> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-12 col-md-12">
                    <CardData activeTab={activeTab} setActiveTab={setActiveTab} enterprise={enterprise} />
                </div>
            </section>
        </>
    )
}