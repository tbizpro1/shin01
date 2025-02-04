import React from "react";
import { lucia, documentos_da_startup, eventos, telefone, sala_de_aula, agenda, beneficios, biblioteca, lipi } from "../../../assets/images";

export function CardMain() {
    return (
        <div className="file_manager">
            <div className="row clearfix">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="file">
                            <a href="#">
                                <div className="icon">
                                    <img src={biblioteca} alt="" />
                                    <p style={{color:"black"}}><strong>Biblioteca <br />de Documentos</strong></p>
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
                                    <img src={eventos} alt="" />
                                    <p style={{color:"black"}}><strong>Nossos <br />Eventos</strong></p>
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