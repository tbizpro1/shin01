
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import TotalOrdersCard from "../TotalOrdersCard/TotalOrdersCard";
import TotalRevenueCard from "../TotalRevenueCard/TotalRevenueCard";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const mockIncomeData = {
  totalIncome: 4,
  averagePercentage: 3,
  trendData: [1, 2, 3, 6, 5, 26, 7, 1, 9, 10, 11, 22],
};

const TotalIncomeCard = ({ data }) => {
  const chartData = {
    labels: Array.from({ length: data.trendData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Income Trend",
        data: data.trendData,
        borderColor: "rgb(63, 81, 181, 0.7)",
        backgroundColor: "rgba(221,94,137, 0.2)",
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
                    <strong>Quantidade de sócios</strong>
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
export default TotalIncomeCard;
