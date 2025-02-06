import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { Subheader } from "../HeaderCard/Subheader";
import { Profilecard } from "../Profilecard/Profilecard";
import { PartenrsCard } from "../Partnerscard/Partnerscard";
import { DataStartup } from "../DataStartup/datastartup";
import { CardData } from "../DataUpdate/dataupdate";

export function ContentData({ enterprise }) {
    // const[enterpriseDetail, setEnterpriseDetail] = useState()
    const { user, token } = useContext(AuthContext)
    const { register } = useForm()

    console.log("aqui", enterprise) //verificar o valor de enterprise

    const enterprise_id = enterprise?.enterprise_id
    // const enterprise_id = enterprise.enterprise_id || "ID não disponível"
    return (
        <>
            <Subheader
                title={'Dados da startup'}
                description={'Gerencie os dados da startup!'}
            />
            <section className="container-fluid">
                <DataStartup />

                <div className="d-flex flex-lg-row flex-column">
                    {/* Primeiro elemento: ocupa 33,33% da largura em telas grandes */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12 me-lg-3 mb-3 mb-lg-0">
                        <Profilecard
                            enterprise={enterprise || {}}
                            enterprise_id={enterprise_id}
                            user={user}
                        />
                    </div>
                    <div className="col-lg-8 col-md-12">
                    <CardData />
                    </div>
                </div>
                <div className="d-flex flex-lg-row flex-column">
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <PartenrsCard enterprise_id={enterprise_id} token={token} />
                    </div>
                </div>
            </section>
        </>
    )
}