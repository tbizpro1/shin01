import React from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Registrar os componentes necessários para o gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dados mock para o componente


// Componente TotalRevenueCard
const TotalRevenueCard = ({ data }) => {


    return (
        <Card>
            <Card.Body style={{ padding: "0" }}>
                {/* Header */}
                <div className="header ">
                    <h2>
                        <strong>Capital</strong>
                    </h2>
                    <ul className="header-dropdown">
                        <li className="dropdown">
                            <ul className="dropdown-menu dropdown-menu-right slideUp">
                                <li><a href="javascript:void(0);">2017 Year</a></li>
                                <li><a href="javascript:void(0);">2016 Year</a></li>
                                <li><a href="javascript:void(0);">2015 Year</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Body */}
                <div className="body text-center" style={{ padding: "0px" }}>
                    {/* Círculo de Progresso */}
                    <div style={{ width: "140px", height: "100%", margin: "0 auto" }}>
                        <CircularProgressbar
                            value={data.progressValue}
                            maxValue={100}
                            text={`${data.progressValue}`}
                            styles={buildStyles({
                                pathColor: "#00ced1", // Cor da barra de progresso
                                textColor: "#00ced1", // Cor do texto
                                trailColor: "#d6d6d6", // Cor do fundo
                                textSize: "24px", // Tamanho do texto
                            })}
                        />
                    </div>
                    <h6 className="m-t-30">Taxa de satisfação</h6>
                    <small className="displayblock">
                        {data.satisfactionRate}% Média{" "}
                        <i className="zmdi zmdi-trending-up" style={{ color: "#00ced1" }}></i>
                    </small>
                    {/* <div style={{ height: "45px", marginTop: "20px" }}>
                                <Bar data={chartData} options={chartOptions} />
                            </div> */}
                </div>
            </Card.Body>
        </Card>
    );
};

export default TotalRevenueCard;