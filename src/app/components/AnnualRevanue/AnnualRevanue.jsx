import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { ArrowUpNarrowWide, HandCoins } from "lucide-react";

// Registrar os componentes necessários do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const EstateAnnualReport = ({ data }) => {
    const chartRef = useRef(null);
    
    // Configuração do gráfico
    const chartData = {
        labels: data.labels, // Eixo X (meses ou períodos)
        datasets: [
            {
                label: "Receita ",
                data: data.receita, // Valores do eixo Y para a linha verde
                borderColor: "rgb(255, 89, 23)", // Verde
                backgroundColor: "rgb(255, 166, 23)",
                fill: true,
                tension: 0.4,
            },
            {
                label: "Lucro",
                data: data.lucro, // Valores do eixo Y para a linha amarela
                borderColor: "rgb(128, 0, 128)", // Azul
                backgroundColor: "rgb(179, 77, 177)",
                fill: true,
                tension: 0.4,
            },
            {
                label: "Faturamento",
                data: data.faturamento, // Valores do eixo Y para a linha azul
                borderColor: "rgba(33, 150, 243, 1)", // Azul
                backgroundColor: "rgba(33, 150, 243, 0.2)",
                fill: true,
                tension: 0.4,
            },
            ],
        };

    const options = {
        responsive: true,
        plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
        tooltip: {
            enabled: true,
        },
        },
        scales: {
        x: {
            grid: {
            display: true,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
            color: "rgba(0, 0, 0, 0.1)",
            },
        },
        },
    };

    return (
        <div className="row clearfix">
            <div className="col-lg-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Receita</strong> Anual</h2>
                    </div>
                    <div className="body">
                        <div className="row text-center">
                            <div className="col-sm-4 col-6 d-flex ">
                                <i class="zmdi zmdi-money-box zmdi-hc-4x"></i>
                                <div className=" m-l-20">
                                    <h4 className="m-t-0">
                                    R$ { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(data.salesReport)}{" "}
                                    <i className="zmdi zmdi-trending-up col-green"></i>
                                    </h4>
                                    <p className="text-muted">Receita</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 d-flex">
                                <HandCoins size={50}/>
                                <div className=" m-l-20">
                                    <h4 className="m-t-0">
                                    R$ { new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(data.annualRevenue)}{" "}
                                    <i className="zmdi zmdi-trending-down col-red"></i>
                                    </h4>
                                    <p className="text-muted">Lucro</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 d-flex">
                                <ArrowUpNarrowWide size={50}/>
                                <div className=" m-l-20">
                                    <h4 className="m-t-0">
                                    R$ { new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(data.totalProfit)}{" "}
                                    <i className="zmdi zmdi-trending-up col-green"></i>
                                    </h4>
                                    <p className="text-muted">Faturamento</p>
                                </div>
                            </div>
                        </div>
                        <div id="area_chart" className="graph">
                            <Line ref={chartRef} data={chartData} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateAnnualReport;