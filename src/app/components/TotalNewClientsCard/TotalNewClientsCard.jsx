import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const TotalNewClientsCard = ({ enterprise }) => {
    const { token } = useContext(AuthContext);
    const [metrics, setMetrics] = useState([]);
    const [latestMetric, setLatestMetric] = useState(null);
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
                        setLatestMetric(filteredMetrics[0]);
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
            months[month] = metric.new_clients ?? 0;
        });
        setTrendData([...months]);
    };

    const chartData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Novos Clientes",
                data: trendData,
                borderColor: "rgb(75, 192, 192)", // Cor diferenciada
                backgroundColor: "rgba(75, 192, 192, 0.2)",
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
                        return monthlyMetric !== null ? `Novos Clientes: ${monthlyMetric}` : 'Sem dados';
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

    return (
        <Card>
            <Card.Body style={{ padding: "0" }}>
                <div className="header header_helper">
                    <h2 style={{ fontSize: "1rem", color: "#4BC0C0", padding: "0" }}>
                        <strong>Novos Clientes</strong>
                    </h2>
                </div>
                <div style={{ padding: "0px 20px 0 20px" }}>
                    <h5 className="m-b-0">{latestMetric?.new_clients?.toLocaleString() || "N/A"}</h5>
                    <small className="displayblock">
                        Atualizado em: {latestMetric?.date_recorded ? 
                            new Date(latestMetric.date_recorded).toLocaleDateString() : 
                            "Sem dados"}
                        <i className="zmdi zmdi-trending-up" style={{ color: "#4BC0C0" }}></i>
                    </small>
                </div>
                <div style={{ height: "100px" }}>
                    <Line data={chartData} options={chartOptions} height={200} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default TotalNewClientsCard;
