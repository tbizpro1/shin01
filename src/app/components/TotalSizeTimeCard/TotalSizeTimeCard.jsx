import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TotalSizeTimeCard = ({ enterprise }) => {
    const { token } = useContext(AuthContext);
    const [metrics, setMetrics] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [trendData, setTrendData] = useState(Array(12).fill(null));

    useEffect(() => {
        if (!enterprise?.enterprise_id || !token) return;

        getMetricsCompany(token)
            .then(response => {
                if (response && Array.isArray(response)) {
                    let filteredMetrics = response.filter(metric => 
                        metric?.enterprise_id === enterprise?.enterprise_id && metric.date_recorded
                    );

                    // Ordena do mais recente ao mais antigo
                    filteredMetrics.sort((a, b) => 
                        new Date(b.date_recorded).getTime() - new Date(a.date_recorded).getTime() || b.id - a.id
                    );

                    setMetrics(filteredMetrics);
                    if (filteredMetrics.length > 0) {
                        setYear(new Date(filteredMetrics[0].date_recorded).getFullYear());
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
        const months = Array(12).fill(null);
        metrics.forEach(metric => {
            const month = new Date(metric.date_recorded).getMonth();
            months[month] = metric.team_size ?? null;
        });
        setTrendData(months);
    };

    const chartData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Quantidade de Sócios",
                data: trendData,
                borderColor: "rgb(63, 81, 181, 0.7)",
                backgroundColor: "rgba(221,94,137, 0.2)",
                tension: 0.4,
                spanGaps: true,
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
                        return monthlyMetric !== null ? `Sócios: ${monthlyMetric}` : 'Sem dados';
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
                    <h2 style={{ fontSize: "1rem", color: "#2196F3", padding: "0"  }}>
                        <strong>Quantidade de Sócios</strong>
                    </h2>
                </div>
                <div style={{ height: "100px" }}> {/* Limita a altura do gráfico */}
                    <Line data={chartData} options={chartOptions} height={200} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default TotalSizeTimeCard;