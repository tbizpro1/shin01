import React from "react";

export function ActivitiesList() {
    return (
        <div class="card activities">
            <div class="header">
                <h2><strong>Lista de tarefas</strong> <small>Conclua tarefas para passar de fase</small></h2>
            </div>
            <div class="body">
                <ul class="list-unstyled activity">
                    <li>
                        <a href="">
                            <i class="zmdi zmdi-cake bg-blue"></i>
                            <div class="info">
                                <h4 style={{ color: '#fca311' }}>Agendar Mentoria de Marketing</h4>
                                <small>29/12/2024</small>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="zmdi zmdi-file-text bg-red"></i>
                            <div class="info">
                                <h4 style={{ color: '#fca311' }}>Mercado Inicial</h4>
                                <small>31/12/2024</small>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="zmdi zmdi-account-box-phone bg-green"></i>
                            <div class="info">
                                <h4 style={{ color: '#fca311' }}>Reunião de Acompanhamento</h4>
                                <small>16/12/2024</small>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i class="zmdi zmdi-email bg-amber"></i>
                            <div class="info">
                                <h4 style={{ color: '#fca311' }}>Enviar Documentação de Teste</h4>
                                <small>17/12/2024</small>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i class="zmdi zmdi-account-box-phone bg-green"></i>
                            <div class="info">
                                <h4 style={{ color: '#fca311' }}>Reunião de Conselho</h4>
                                <small>15/01/2025</small>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}