import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const mockOrdersData = {
    totalOrders: 512,
    averagePercentage: 18,
    trendData: [4, 5, 2, 8, 4, 8, 7, 4, 8, 5],
};

const TotalOrdersCard = ({ data = mockOrdersData }) => {
    const chartData = {
        labels: Array.from({ length: data.trendData.length }, (_, i) => i + 1),
        datasets: [
            {
                label: "Orders Trend",
                data: data.trendData,
                borderColor: "rgb(33, 150, 243, 0.7)",
                backgroundColor: "rgba(33, 150, 243, 0.2)",
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
                        <strong>Quatindade de Sócios</strong>
                    </h2>
                </div>
                <div style={{padding: "0px 20px 0 20px"}}>
                    <h5 className="m-b-0">{data.totalOrders.toLocaleString()}</h5>
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