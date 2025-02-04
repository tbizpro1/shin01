import React, { useContext, useEffect, useState } from "react";
import { Subheader } from "../HeaderCard/Subheader";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import addProfileImage from "../../api/post/profile-image";
import getEnterpriseById from "../../api/get/get-enterprise-by-id";
import { PartenrsCard } from "../Partnerscard/Partnerscard";
import { Profilecard } from "../Profilecard/Profilecard";
import { CardMainStartup } from "../CardMainStartup/cardmainstartup";

export function ContentStartupHome({enterprise}) {
    // const[enterpriseDetail, setEnterpriseDetail] = useState()
    const { user, token } = useContext(AuthContext)
    const { register } = useForm()
    console.log("aqui", enterprise)

    const enterprise_id = enterprise?.enterprise_id

    // useEffect(() => {
    //     getEnterpriseById(enterprise_id, token).then(response =>
    //         setEnterpriseDetail(response)
    //     )
    // }, [enterprise, token, enterprise_id])


    const handleProfileImageChange = async (e) => {
        const file = e?.target?.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("profile_picture", file);

            const response = await addProfileImage(user?.id, token, formData);

            if (response) {
                console.log('Imagem de perfil atualizada com sucesso', response);
            }
        }
        window.location.reload();
    };
    return (
        <>
            <Subheader
                title={'Perfil da startup'}
                description={'Gerencie as informações da startup!'}
            />
            <section className="container-fluid">
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
                                                <h2 style={{color:'#FCA311'}}><strong>4</strong></h2>
                                                <small class="info">de 24</small>
                                            </div>
                                            <div class="col-12">
                                                <div class="progress m-t-20" value="20" type="success">
                                                    <div class="progress-bar l-green" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:'20%'}}></div>
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
                                                <h2 style={{color:'#FCA311'}}><strong>9.500,00</strong></h2>
                                                <small class="info">+5,62%</small>
                                            </div>
                                            <div class="col-12">
                                                <div class="progress m-t-20" value="12">
                                                    <div class="progress-bar l-blush" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={{width:'12%'}}></div>
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
                                                <h2 style={{color:'#FCA311'}}><strong>5</strong></h2>
                                                <small class="info">desde 04/12/2024</small>
                                            </div>
                                            <div class="col-12">
                                                <div class="progress m-t-20" value="39">
                                                    <div class="progress-bar l-parpl" role="progressbar" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{width:'39%'}}></div>
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
                                                <h2 style={{color:'#FCA311'}}><strong>68</strong></h2>
                                                <small class="info">+12,33%</small>
                                            </div>
                                            <div class="col-12">
                                                <div class="progress m-t-20" value="89" type="success">
                                                    <div class="progress-bar l-blue" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width:'89%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-lg-row flex-column">
                    {/* Primeiro elemento: ocupa 33,33% da largura em telas grandes */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12 me-lg-3 mb-3 mb-lg-0">
                        <Profilecard
                            handleProfileImageChange={handleProfileImageChange}
                            register={register}
                            enterprise={enterprise}
                            enterprise_id={enterprise_id}
                            user={user}
                        />
                    </div>

                    {/* Segundo elemento: ocupa 66,66% da largura em telas grandes */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-8 col-md-12">
                        <CardMainStartup />
                    </div>
                </div>
                <div className="d-flex flex-lg-row flex-column">
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <PartenrsCard enterprise_id={enterprise_id} token={token}/>
                    </div>
                    {/* calendario */}
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
                        <div className="card w_calender">
                            <div className="date l-slategray">
                                <span>Sunday, December 28</span>
                                <span>2017</span>
                            </div>
                            <div className="body days">
                                <ul className="m-t-10">
                                    <li>MON</li>
                                    <li>TUE</li>
                                    <li>WED</li>
                                    <li>THU</li>
                                    <li>FRI</li>
                                    <li>SAT</li>
                                    <li>SUN</li>
                                </ul>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                </ul>
                                <ul>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                </ul>
                                <ul>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>19</li>
                                    <li>20</li>
                                    <li>21</li>
                                </ul>
                                <ul>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li><em>28</em></li>
                                </ul>
                                <ul>
                                    <li>29</li>
                                    <li>30</li>
                                    <li>31</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-lg-grow-0 flex-lg-shrink-0 col-lg-4 col-md-12">
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
                                                <h4 style={{color:'#fca311'}}>Agendar Mentoria de Marketing</h4>
                                                <small>29/12/2024</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="zmdi zmdi-file-text bg-red"></i>
                                            <div class="info">
                                                <h4 style={{color:'#fca311'}}>Mercado Inicial</h4>
                                                <small>31/12/2024</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="zmdi zmdi-account-box-phone bg-green"></i>
                                            <div class="info">
                                                <h4 style={{color:'#fca311'}}>Reunião de Acompanhamento</h4>
                                                <small>16/12/2024</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="zmdi zmdi-email bg-amber"></i>
                                            <div class="info">
                                                <h4 style={{color:'#fca311'}}>Enviar Documentação de Teste</h4>
                                                <small>17/12/2024</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="zmdi zmdi-account-box-phone bg-green"></i>
                                            <div class="info">
                                                <h4 style={{color:'#fca311'}}>Reunião de Conselho</h4>
                                                <small>15/01/2025</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
