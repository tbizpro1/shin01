import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { getMetricsCompany } from "../../api/get/get-metrics-company";
import { AuthContext } from "../../context/authContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const mockOrdersData = {
    totalOrders: 512,
    averagePercentage: 18,
    trendData: [4, 5, 2, 8, 4, 8, 7, 4, 8, 5],
};

const TotalOrdersCard = ({ data = mockOrdersData, enterprise }) => {
    const { token } = useContext(AuthContext);
    const [metrics, setMetrics] = useState([]);
    const [latestMetric, setLatestMetric] = useState(null);
    const [trendData, setTrendData] = useState([]);

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
            if (metric && metric.total_clients !== undefined) {
                lastValidValue = Number(metric.total_clients);
                return lastValidValue;
            }
            // Para meses sem dados, usa o último valor válido
            return lastValidValue;
            });

            setTrendData(processedData);
            setMetrics(filteredMetrics);

            console.log('Dados mensais processados:', monthlyValues);
            console.log('Dados do gráfico com preenchimento:', processedData);
        }
        })
        .catch(error => {
        console.error("Erro ao buscar métricas:", error);
        setLatestMetric(null);
        setTrendData(new Array(12).fill(0));
        });
    }, [token, enterprise?.enterprise_id]);

    const chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
        .slice(0, new Date().getMonth() + 1),
    datasets: [
        {
        label: "Quantidade de Sócios",
        data: trendData.slice(0, new Date().getMonth() + 1),
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
    console.log("metricas", metrics)

    return (  
        <Card>
            <Card.Body style={{ padding: "0" }}>
                <div className="header header_helper">
                    <h2 style={{ fontSize: "1rem", color: "#2196F3", padding: "0"  }}>
                        <strong>Total de Clientes</strong>
                    </h2>
                </div>
                <div style={{padding: "0px 20px 0 20px"}}>
                    <h5 className="m-b-0">{latestMetric?.total_clients?.toLocaleString()}</h5>
                    <small className="displayblock">
                        {data.averagePercentage}% Média{" "}
                        <i className="zmdi zmdi-trending-down" style={{ color: "#2196F3" }}></i>
                    </small>
                </div>
                <div style={{ height: "100px" }}> {/* Limita a altura do gráfico */}
                    <Line data={chartData} options={chartOptions} height={200} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default TotalOrdersCard;