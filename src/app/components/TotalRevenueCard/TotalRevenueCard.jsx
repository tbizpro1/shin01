import { Card } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; // Certifique-se de importar o CircularProgressbar
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

const TotalRevenueCard = ({ enterprise }) => {
    const { token } = useContext(AuthContext);
    const [metrics, setMetrics] = useState([]);
    const [latestMetric, setLatestMetric] = useState(null);

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
                    }
                }
            })
            .catch(error => {
                console.error("Erro ao buscar métricas:", error);
                setMetrics([]);
            });
    }, [token, enterprise?.enterprise_id]);

    return (
        <Card>
            <Card.Body style={{ padding: "0" }}>
                {/* Header */}
                <div className="header">
                    <h2 style={{ fontSize: "1rem", color: "#00ced1", padding: "0" }}>
                        <strong>Captable</strong>
                    </h2>
                </div>

                {/* Circular Progress Bar */}
                <div className="body" style={{ padding: "0px" }}>
                    <div style={{
                        width: "130px",
                        height: "130px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: '3rem'
                    }}>
                        <CircularProgressbar
                            value={latestMetric?.captable || 0}
                            maxValue={100}
                            text={latestMetric?.captable ? `${latestMetric?.captable}%` : "N/A"}
                            styles={buildStyles({
                                pathColor: "#00ced1", // Cor da barra de progresso (aqua)
                                textColor: "#00ced1", // Cor do texto (aqua)
                                trailColor: "#d6d6d6", // Cor do fundo
                                textSize: "22px", // Tamanho do texto                              
                                fontWeight: "bold", // Deixa o texto em negrito
                            })}
                        />
                    </div>
                </div>


                {/* Receita Total */}
                <div style={{ paddingTop: '5rem' }}>
                    <div className="header">
                        <h2 style={{ fontSize: ".9rem", color: "#00ced1", padding: "1px" }}>
                            <strong>Necessidade de Capital</strong>
                        </h2>
                    </div>
                    <h5 style={{ color: "#00ced1", paddingLeft: "1.5rem" }}>
                        {
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(latestMetric?.revenue_period || 0)
                        }
                    </h5>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TotalRevenueCard;
