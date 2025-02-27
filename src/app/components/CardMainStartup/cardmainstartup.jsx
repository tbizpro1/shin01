import React, { useContext, useEffect, useState } from "react";
import { lucia, documentos_da_startup, eventos, telefone, sala_de_aula, agenda, beneficios, biblioteca, dados_financeiros, minhas_startups } from "../../../assets/images";
import { Link } from "react-router-dom";
import getEnterpriseById from "../../api/get/get-enterprise-by-id";
import { AuthContext } from "../../context/authContext";

export function CardMainStartup({enterprise}) {
    const enterprise_id = enterprise?.enterprise_id

    console.log("hiii",enterprise)

    return (
        <div className="file_manager">
            <div className="row clearfix">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">
                            <a href="#">
                            <Link 
                                to={"/startup"}
                                key={enterprise_id} 
                                state={{ enter: enterprise }}
                            >  
                                <div className="icon">
                                    <img src={minhas_startups} alt="" /><br />
                                    <p style={{color:"#fca311"}}><strong>One-Pager<br /></strong>
                                    <p style={{color:'#fca311', fontSize:'12px'}}>Resumo do projeto em uma página</p></p>
                                    
                                </div>
                            </Link>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">

                            <Link
                                to={"/datapage"}
                                key={enterprise?.enterprise_id}
                                state={{enter: enterprise}}
                                
                            >

                                <div className="icon">
                                    <img src={dados_financeiros} alt="" />
                                    <p style={{color:"black"}}><strong>Dados <br />Financeiros</strong></p>
                                </div>
                            </Link>
                            {/* <a href="/datapage">
                                <div className="icon">
                                    <img src={dados_financeiros} alt="" />
                                    <p style={{color:"black"}}><strong>Dados <br />Financeiros</strong></p>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">
                            <a href="#">
                                <div className="icon">
                                    <img src={documentos_da_startup} alt="" />
                                    <p style={{color:"black"}}><strong>Desafios <br />de Mercado</strong></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">
                            <a href="https://startuppiaui.lmsestudio.com/auth"
                            target="_blank"
                            rel="noopener noreferrer">
                                <div className="icon">
                                    <img src={sala_de_aula} alt="" /><br /><br />
                                    <p style={{color:"black"}}><strong>Sala de Aula</strong></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">
                            <a href="https://luc-ia.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="icon">
                                    <img src={lucia} alt="" />
                                    <p style={{color:"black"}}><strong>Peça ajuda <br />para a Luc.IA</strong></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">
                            <a href="#">
                                <div className="icon">
                                    <img src={agenda} alt="" />
                                    <p style={{color:"black"}}><strong>Agende um horário <br />com nosso time</strong></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}