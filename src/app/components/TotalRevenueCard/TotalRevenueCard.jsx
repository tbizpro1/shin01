import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getCaptable } from "../../api/get/get-captable";
import { AuthContext } from "../../context/authContext";

// Registrar os componentes necessários para o gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const TotalRevenueCard = ({ enterprise  }) => {
    const [capital, setCapital] = useState(null)
    console.log("Card teste:", enterprise?.enterprise_id)
    const {token} = useContext(AuthContext) 
    useEffect(()=>{
        getCaptable(token, enterprise?.enterprise_id).then(response => setCapital(response))
    },[])

    return (
          <Card>
              <Card.Body style={{ padding: "0" }}>
                  {/* Header */}
                  <div className="header ">
                      <h2 style={{ fontSize: "1rem", color: "#00ced1", padding: "10px" }}>
                          <strong>Capital</strong>
                      </h2>
                      <ul className="header-dropdown">
                          <li className="dropdown">
                              <a href="javascript:void(0);" className="dropdown-toggle" role="button">
                                  <i className="zmdi zmdi-more"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-right slideUp">
                                  <li><a href="javascript:void(0);">2017 Year</a></li>
                                  <li><a href="javascript:void(0);">2016 Year</a></li>
                                  <li><a href="javascript:void(0);">2015 Year</a></li>
                              </ul>
                          </li>
                          <li className="remove">
                              <a role="button" className="boxs-close">
                                  <i className="zmdi zmdi-close"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
                  {/* Body */}
                  <div className="body text-center" style={{ padding: "0px" }}>
                          {/* Círculo de Progresso */}
                      <div style={{ width: "140px", height: "100%", margin: "0 auto" }}>
                          <CircularProgressbar
                              value={capital?.progress_percentage}
                              maxValue={100}
                              text={capital?.progress_percentage}
                              styles={buildStyles({
                                  pathColor: "#00ced1", // Cor da barra de progresso
                                  textColor: "#00ced1", // Cor do texto
                                  trailColor: "#d6d6d6", // Cor do fundo
                                  textSize: "24px", // Tamanho do texto
                              })}
                          />
                      </div>
                  </div>
                  <div className="header ">
                      <h2 style={{ fontSize: ".9rem", color: "#00ced1", padding: "1px" }}>
                          <strong>Necessidade de capital</strong>
                      </h2>
                  </div>
                  <h5 style={{color: "#00ced1", paddingLeft: "1.5rem"}}>
                      { 
                          new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                          }).format(capital?.capital_needed)
                      }
                  </h5>
              </Card.Body>
          </Card>
    );
};

export default TotalRevenueCard;