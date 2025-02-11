import React from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Registrar os componentes necessários para o gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dados mock para o componente
const mockRevenueData = {
    totalRevenue: 245124,
    satisfactionRate: 47,
    trendData: [3, 2, 6, 5, 9, 8, 7, 8, 4, 5, 1, 2, 9, 5, 1, 3, 5, 7, 4, 6],
    progressValue: 66, // Valor do círculo de progresso
};

// Componente TotalRevenueCard
const TotalRevenueCard = ({ data = mockRevenueData }) => {


    return (
        <div className="col-lg-6 col-md-12">
            <div className="card tasks_report">
                <Card>
                    <Card.Body style={{ padding: "0" }}>
                        {/* Header */}
                        <div className="header ">
                            <h2 style={{ fontSize: "1rem", color: "#00ced1", padding: "10px" }}>
                                <strong>Capital</strong>
                            </h2>
                            <ul className="header-dropdown">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" role="button">
                                        <i className="zmdi zmdi-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                                        <li><a href="javascript:void(0);">2017 Year</a></li>
                                        <li><a href="javascript:void(0);">2016 Year</a></li>
                                        <li><a href="javascript:void(0);">2015 Year</a></li>
                                    </ul>
                                </li>
                                <li className="remove">
                                    <a role="button" className="boxs-close">
                                        <i className="zmdi zmdi-close"></i>
                                    </a>
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
                            <h6 className="m-t-30">Satisfaction Rate</h6>
                            <small className="displayblock">
                                {data.satisfactionRate}% Average{" "}
                                <i className="zmdi zmdi-trending-up" style={{ color: "#00ced1" }}></i>
                            </small>
                            {/* <div style={{ height: "45px", marginTop: "20px" }}>
                                <Bar data={chartData} options={chartOptions} />
                            </div> */}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default TotalRevenueCard;