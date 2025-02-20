import React, { useContext, useEffect, useRef, useState } from "react";
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
import { ArrowUpNarrowWide, HandCoins, TrendingUp } from "lucide-react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

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


const EstateAnnualReport = ({ enterprise, data }) => {
    const chartRef = useRef(null);
    
    const { token } = useContext(AuthContext);
    const [metrics, setMetrics] = useState([]);
    const [latestMetric, setLatestMetric] = useState(null);
    const [trendData, setTrendData] = useState([]);
    const [monthLabels, setMonthLabels] = useState([]);
    const [financialMetrics, setFinancialMetrics] = useState({
        revenue: 0,
        profit: 0,
        totalRevenue: 0
    });
    
    useEffect(() => {
        if (!enterprise?.enterprise_id || !token) return;
    
        getMetricsCompany(token)
            .then(response => {
                if (response && Array.isArray(response)) {
                    // Filtra as métricas da empresa atual
                    let filteredMetrics = response.filter(metric => 
                        metric?.enterprise_id === enterprise?.enterprise_id
                    );
        
                    // Agrupa os dados por mês
                    const monthlyData = filteredMetrics.reduce((acc, metric) => {
                        const date = new Date(metric.date_recorded);
                        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                        
                        if (!acc[monthKey] || new Date(acc[monthKey].date_recorded) < date) {
                            acc[monthKey] = metric;
                        }
                        
                        return acc;
                    }, {});
        
                    // Ordena os meses
                    const sortedMonths = Object.keys(monthlyData).sort();
                    
                    // Cria array com 12 posições para os meses
                    const monthlyValues = new Array(12).fill(null);
                    
                    // Preenche o array com os valores mais recentes de cada mês
                    sortedMonths.forEach(monthKey => {
                        const month = parseInt(monthKey.split('-')[1]) - 1;
                        monthlyValues[month] = monthlyData[monthKey];
                    });
        
                    // Define a métrica mais recente
                    const currentMonth = new Date().getMonth();
                    const mostRecentMetric = monthlyValues[currentMonth] || null;
                    setLatestMetric(mostRecentMetric);
        
                    // Prepara os dados para o gráfico com preenchimento de valores vazios
                    let lastValidValue = 0;
                    const processedData = monthlyValues.map((metric, index) => {
                        if (metric && metric.revenue_period !== undefined) {
                            lastValidValue = Number(metric.revenue_period);
                            return lastValidValue;
                        }
                        // Para meses sem dados, usa o último valor válido
                        return lastValidValue;
                    });
                    
                    // Cria labels para os meses
                    const months = [
                        "2024", "2025",
                    ];
                    
                    // Pega apenas os meses até o atual
                    const currentMonthIndex = new Date().getMonth();
                    const relevantMonths = months.slice(0, currentMonthIndex + 1);
                    
                    // Calcula métricas financeiras baseadas no revenue_period
                    const revenue = mostRecentMetric?.revenue_period || 0;
                    
                    // Supondo que o lucro seja aproximadamente 25% da receita (ajuste conforme necessário)
                    const profit = revenue * 0.25;
                    
                    // Total acumulado de todas as receitas mensais
                    const totalRevenue = processedData.reduce((sum, value) => sum + (value || 0), 0);
                    
                    setFinancialMetrics({
                        revenue,
                        profit, 
                        totalRevenue
                    });
        
                    setTrendData(processedData.slice(0, currentMonthIndex + 1));
                    setMonthLabels(relevantMonths);
                    setMetrics(filteredMetrics);
                }
            })
            .catch(error => {
                console.error("Erro ao buscar métricas:", error);
                setLatestMetric(null);
                setTrendData(new Array(12).fill(0));
            });
    }, [token, enterprise?.enterprise_id]);
    
    const chartData = {
        labels: monthLabels,
        datasets: [
            {
                label: "Receita Mensal",
                data: trendData,
                borderColor: "rgb(255, 89, 23)",
                backgroundColor: "rgba(255, 166, 23, 0.3)",
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
                callbacks: {
                    label: function(context) {
                        return `Receita: ${new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(context.raw)}`;
                    }
                }
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
                ticks: {
                    callback: function(value) {
                        return new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            notation: 'compact'
                        }).format(value);
                    }
                }
            },
        },
    };

    // Formata valores monetários
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value || 0);
    };

    // Determina se o valor está em crescimento
    const isGrowing = (value, previousValue) => {
        return value > previousValue;
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
                                <i className="zmdi zmdi-money-box zmdi-hc-4x"></i>
                                <div className="m-l-20">
                                    <h4 className="m-t-0">
                                        {formatCurrency(financialMetrics.revenue)}{" "}
                                        {isGrowing(financialMetrics.revenue, trendData[trendData.length - 2] || 0) ? (
                                            <i className="zmdi zmdi-trending-up col-green"></i>
                                        ) : (
                                            <i className="zmdi zmdi-trending-down col-red"></i>
                                        )}
                                    </h4>
                                    <p className="text-muted">Receita Mensal</p>
                                </div>
                            </div>
                        </div>
                            {/* <div className="col-sm-4 col-6 d-flex">
                                <HandCoins size={50}/>
                                <div className="m-l-20">
                                    <h4 className="m-t-0">
                                        {formatCurrency(financialMetrics.profit)}{" "}
                                        {isGrowing(financialMetrics.profit, (trendData[trendData.length - 2] || 0) * 0.25) ? (
                                            <i className="zmdi zmdi-trending-up col-green"></i>
                                        ) : (
                                            <i className="zmdi zmdi-trending-down col-red"></i>
                                        )}
                                    </h4>
                                    <p className="text-muted">Lucro Mensal</p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 d-flex">
                                <ArrowUpNarrowWide size={50}/>
                                <div className="m-l-20">
                                    <h4 className="m-t-0">
                                        {formatCurrency(financialMetrics.totalRevenue)}{" "}
                                        <i className="zmdi zmdi-trending-up col-green"></i>
                                    </h4>
                                    <p className="text-muted">Faturamento Total</p>
                                </div>
                            </div>
                        </div> */}
                        <div id="area_chart" className="graph mt-4">
                            <Line ref={chartRef} data={chartData} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateAnnualReport;