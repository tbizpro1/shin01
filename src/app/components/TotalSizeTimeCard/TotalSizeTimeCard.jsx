import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import TotalOrdersCard from "../TotalOrdersCard/TotalOrdersCard";
import TotalRevenueCard from "../TotalRevenueCard/TotalRevenueCard";

const TotalSizeTimeCard = ({ data  }) => {
    const chartData = {
      labels: Array.from({ length: data.trendData.length }, (_, i) => i + 1),
      datasets: [
        {
          label: "Income Trend",
          data: data.trendData,
          borderColor: "rgb(63, 81, 181, 0.7)",
          backgroundColor: "rgba(200, 178, 246,0.5)",
          tension: 0.4,
        },
      ],
    };
  
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
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