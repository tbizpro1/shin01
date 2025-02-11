import React, { useContext, useEffect, useState } from "react";
import { Subheader } from "../HeaderCard/Subheader";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import getEnterpriseById from "../../api/get/get-enterprise-by-id";
import { PartenrsCard } from "../Partnerscard/Partnerscard";

import StartupSettings from "../StartupSettings/StartupSettings";
import FomentSettings from "../StartupSettings/FomentSettings";

import { enterpriseUnd } from "../../../assets/images";
import updateDetailsStartup from "../../api/put/update-details-startup";
import CardDetails from "../CardDetails/CardDetails";

import { ProfileCArdImageStartup } from "../ProfileCardImageStartup/ProfileCardImageStartup";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const handleExportPDF = async () => {
    const content = document.querySelector(".container-fluid"); // Seleciona a área a ser exportada
    const buttons = document.querySelectorAll(".btn"); // Seleciona todos os botões

    if (!content) return;

    // Oculta os botões antes da captura
    buttons.forEach((btn) => (btn.style.display = "none"));

    const canvas = await html2canvas(content, { scale: 2 });

    // Restaura os botões após a captura
    buttons.forEach((btn) => (btn.style.display = "block"));

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a3");
    const imgWidth = 297; // Largura do A3 em mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = 420; // Altura do A3 em mm

    let position = 0;

    while (position < imgHeight) {
        pdf.addImage(imgData, "PNG", 0, position * -1, imgWidth, imgHeight);
        
        position += pageHeight;
        
        if (position < imgHeight) {
            pdf.addPage(); // Adiciona uma nova página se houver mais conteúdo
        }
    }

    pdf.save("export.pdf");
};


export function ContentStartup({enterprise}) {

    const { user, token } = useContext(AuthContext)
    const [enterpriseDetail, setEnterpriseDetail] = useState("")

    const enterprise_id = enterprise?.enterprise_id

    
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
            })
            .catch((error) => {
                console.log("Erro ao atualizar o usuário:", error);
            }).finally(()=> window.location.reload())
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
                        <ProfileCArdImageStartup enterprise_id={enterprise_id} register={register} token={token} enterprise={enterpriseDetail} />
                        <CardDetails  register={register}/>
                        <PartenrsCard enterprise_id={enterprise_id} token={token}/>
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <StartupSettings register={register} control={control} handleExportPDF={handleExportPDF} />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <FomentSettings register={register} control={control} />
                            </div>
                        </div>
                        {/* <div className="row mt-3">
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
                        </div> */}
                        </div>
                </form> 
            </div>


            

        </>
    )
}
