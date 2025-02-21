import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
const EstateAnnualReport = ({ enterprise }) => {
    const { token } = useContext(AuthContext);
    const [metrics, setMetrics] = useState([]);
    const [mostRecentMetric, setMostRecentMetric] = useState(null);
    const [trendData, setTrendData] = useState(Array(12).fill(0));

    useEffect(() => {
        if (!enterprise?.enterprise_id || !token) return;

        getMetricsCompany(token)
            .then(response => {
                if (response && Array.isArray(response)) {
                    let filteredMetrics = response.filter(metric => 
                        metric?.enterprise_id === enterprise?.enterprise_id && metric.date_recorded
                    );

                    filteredMetrics.sort((a, b) => 
                        new Date(b.date_recorded).getTime() - new Date(a.date_recorded).getTime() || b.id - a.id
                    );

                    setMetrics(filteredMetrics);
                    if (filteredMetrics.length > 0) {
                        setMostRecentMetric(filteredMetrics[0]);
                        populateTrendData(filteredMetrics);
                    }
                }
            })
            .catch(error => {
                console.error("Erro ao buscar métricas:", error);
                setMetrics([]);
            });
    }, [token, enterprise?.enterprise_id]);

    const populateTrendData = (metrics) => {
        const months = Array(12).fill(0);
        metrics.forEach(metric => {
            const month = new Date(metric.date_recorded).getMonth();
            months[month] = metric.revenue_period ?? 0;
        });
        setTrendData([...months]);
    };

    const isGrowing = (currentValue, previousValue) => {
        return currentValue > previousValue;
    };

    const chartData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Receita Anual",
                data: trendData,
                borderColor: "rgb(255, 159, 64)", // Cor diferenciada
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                tension: 0.4,
                spanGaps: true,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const monthIndex = context.dataIndex;
                        const monthlyMetric = trendData[monthIndex];
                        return monthlyMetric !== null ? `Receita: ${monthlyMetric}` : 'Sem dados';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0
                }
            }
        }
    };
    const formatCurrency = (value) => {
        if (value === undefined || value === null) return 'N/A';
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
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
                                        {mostRecentMetric?.revenue_period ? 
                                            formatCurrency(mostRecentMetric.revenue_period) : "N/A"}
                                        {isGrowing(mostRecentMetric?.revenue_period, trendData[trendData.length - 2] || 0) ? (
                                            <i className="zmdi zmdi-trending-up col-green"></i>
                                        ) : (
                                            <i className="zmdi zmdi-trending-down col-red"></i>
                                        )}
                                    </h4>
                                    <p className="text-muted">Receita Anual</p>
                                </div>
                            </div>
                        </div>

                        <div id="area_chart" className="graph mt-4">
                            <Line data={chartData} options={chartOptions} height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateAnnualReport;
