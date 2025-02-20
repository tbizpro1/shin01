import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import TotalOrdersCard from "../TotalOrdersCard/TotalOrdersCard";
import TotalRevenueCard from "../TotalRevenueCard/TotalRevenueCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

const TotalSizeTimeCard = ({ enterprise, data }) => {
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
                if (metric && metric.team_size !== undefined) {
                  lastValidValue = Number(metric.team_size);
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
    return (
        <Card>
          <Card.Body style={{ padding: "0" }}>
              <div className="header header_helper">
                    <h2 style={{ fontSize: "1rem", color: "#2196F3", padding: "0"  }}>
                      <strong>Quantidade de Sócios</strong>
                    </h2>
                </div>
                <div style={{padding: "0px 20px 0 20px"}}>
                  <h5 className="m-b-0">{data.totalIncome.toLocaleString()}</h5>
                  <small className="displayblock">
                    {data.averagePercentage}% Média <i className="zmdi zmdi-trending-up"></i>
                  </small>
                </div>
                <div style={{ height: "100px" }}> {/* Limita a altura do gráfico */}
                  <Line data={chartData} options={chartOptions} height={200} />
                </div>
            </Card.Body>
          </Card>
    );
  };


export default TotalSizeTimeCard