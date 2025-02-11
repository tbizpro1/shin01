import React from "react";

export function DataStartup() {
    return (
        <div className="d-flex flex-lg-row flex-column">
            <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-12 col-md-12 me-lg-3 mb-3 mb-lg-0">
                <div class="card widget_2">
                    <ul class="row clearfix list-unstyled m-b-0">
                        <li class="col-lg-3 col-md-6 col-sm-12">
                            <div class="body">
                                <div class="row">
                                    <div class="col-7">
                                        <h5 class="m-t-0">Você está no passo</h5>
                                        <small class="text-small">entrou em 04/12/2024</small>
                                    </div>
                                    <div class="col-5 text-right">
                                        <h2 style={{ color: '#FCA311' }}><strong>4</strong></h2>
                                        <small class="info">de 24</small>
                                    </div>
                                    <div class="col-12">
                                        <div class="progress m-t-20" value="20" type="success">
                                            <div class="progress-bar l-green" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-lg-3 col-md-6 col-sm-12">
                            <div class="body">
                                <div class="row">
                                    <div class="col-4">
                                        <h5 class="m-t-0"></h5>
                                        <small class="text-small">01/11/2024 a 30/11/2024</small>
                                    </div>
                                    <div class="col-8 text-right">
                                        <h2 style={{ color: '#FCA311' }}><strong>9.500,00</strong></h2>
                                        <small class="info">+5,62%</small>
                                    </div>
                                    <div class="col-12">
                                        <div class="progress m-t-20" value="12">
                                            <div class="progress-bar l-blush" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={{ width: '12%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-lg-3 col-md-6 col-sm-12">
                            <div class="body">
                                <div class="row">
                                    <div class="col-7">
                                        <h5 class="m-t-0">TRL</h5>
                                        <small class="text-small">Validação do conceito em ambiente relevante</small>
                                    </div>
                                    <div class="col-5 text-right">
                                        <h2 style={{ color: '#FCA311' }}><strong>5</strong></h2>
                                        <small class="info">desde 04/12/2024</small>
                                    </div>
                                    <div class="col-12">
                                        <div class="progress m-t-20" value="39">
                                            <div class="progress-bar l-parpl" role="progressbar" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{ width: '39%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="col-lg-3 col-md-6 col-sm-12">
                            <div class="body">
                                <div class="row">
                                    <div class="col-7">
                                        <h5 class="m-t-0">Clientes</h5>
                                        <small class="text-small">01/11/2024 a 30/11/2024</small>
                                    </div>
                                    <div class="col-5 text-right">
                                        <h2 style={{ color: '#FCA311' }}><strong>68</strong></h2>
                                        <small class="info">+12,33%</small>
                                    </div>
                                    <div class="col-12">
                                        <div class="progress m-t-20" value="89" type="success">
                                            <div class="progress-bar l-blue" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: '89%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}