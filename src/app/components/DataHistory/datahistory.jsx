import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { getMetricsCompany } from "../../api/get/get-metrics-company";

export function DataHistory({ enterprise }) {
  const { token } = useContext(AuthContext);
  const [metrics, setMetrics] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

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
          }
        }
      })
      .catch(error => {
        console.error("Erro ao buscar métricas:", error);
        setMetrics([]);
      });
  }, [token, enterprise?.enterprise_id]);
  console.log(metrics)
  const dataFields = [
    { key: "team_size", label: "Tamanho do Time" },
    { key: "revenue_period", label: "Receita do Período" },
    { key: "total_clients", label: "Total de Clientes" },
    { key: "new_clients", label: "Novos Clientes" },
    { key: "investment_round_open", label: "Rodada de Investimento Aberta" },
    { key: "capital_needed", label: "Capital Necessário" },
    { key: "value_foment", label: "Valor do Fomento" },
    { key: "valuation", label: "Valuation" },
    { key: "current_capital", label: "Capital Atual" },
    { key: "captable", label: "Captable" }
  ];

  const getMonthsData = (key) => {
    const months = Array(12).fill("-");
    if (metrics.length > 0) {
      const latestMetric = metrics[0]; // Pega sempre o último registro mais recente
      const month = new Date(latestMetric.date_recorded).getMonth();
      months[month] = latestMetric[key] ?? "-";
    }
    return months;
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table id="mainTable" className="table table-striped" style={{ cursor: 'pointer' }}>
            <thead>
              <tr>
                <th>Dado <span className="filter-icon">&#9662;</span></th>
                <th>ANO <span className="filter-icon">&#9662;</span></th>
                <th>JAN</th>
                <th>FEV</th>
                <th>MAR</th>
                <th>ABR</th>
                <th>MAI</th>
                <th>JUN</th>
                <th>JUL</th>
                <th>AGO</th>
                <th>SET</th>
                <th>OUT</th>
                <th>NOV</th>
                <th>DEZ</th>
              </tr>
            </thead>
            <tbody>
              {dataFields.map(({ key, label }) => (
                <tr key={key}>
                  <td>{label}</td>
                  <th>{year}</th>
                  {getMonthsData(key).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
