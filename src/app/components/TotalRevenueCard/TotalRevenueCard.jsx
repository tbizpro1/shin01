import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getCaptable } from "../../api/get/get-captable";
import { AuthContext } from "../../context/authContext";

// Registrar os componentes necessários para o gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const TotalRevenueCard = ({ enterprise  }) => {
    const [capital, setCapital] = useState(null)
    console.log("Card teste:", enterprise?.enterprise_id)
    const {token} = useContext(AuthContext) 
    useEffect(()=>{
        getCaptable(token, enterprise?.enterprise_id).then(response => setCapital(response))
    },[])

    return (
            <Card>
                <Card.Body style={{ padding: "0" }}>
                    {/* Header */}
                    <div className="header ">
                        <h2 >
                            <strong>Capital</strong>
                        </h2>
                    </div>
                    {/* Body */}
                    <div className="body text-center" style={{ padding: "0px" }}>
                        <div style={{ width: "140px", height: "100%", margin: "0 auto",paddingTop: '3rem' }}>
                            <CircularProgressbar
                                value={capital?.progress_percentage}
                                maxValue={100}
                                text={capital?.progress_percentage}
                                styles={buildStyles({
                                    pathColor: "#00ced1", // Cor da barra de progresso
                                    textColor: "#00ced1", // Cor do texto
                                    trailColor: "#d6d6d6", // Cor do fundo
                                    textSize: "24px", // Tamanho do texto
                                })}
                            />
                        </div>
                    </div>
                    <div style={{paddingTop: '5rem'}}>
                        <div className="header ">
                            <h2 style={{ fontSize: ".9rem", color: "#00ced1", padding: "1px" }}>
                                <strong>Necessidade de capital</strong>
                            </h2>
                        </div>
                        <h5 style={{color: "#00ced1", paddingLeft: "1.5rem"}}>
                            { 
                                new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(capital?.capital_needed)
                            }
                        </h5>
                    </div>
                </Card.Body>
            </Card>
    );
};

export default TotalRevenueCard;