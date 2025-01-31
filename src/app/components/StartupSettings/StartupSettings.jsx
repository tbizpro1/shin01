import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import Inputmask from "react-input-mask";
import updateDetailsStartup from "../../api/put/update-details-startup";
import { enterpriseUnd } from "../../../assets/images";


export default function StartupSettings({  register, control }) {
    
    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            <div className="card card_helper">

                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <div className="row clearfix">
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header header_helper">
                                <h2><strong>O Problema</strong></h2>
                            </div>
                            <div className="body">
                                <div className="col-14">
                                    <textarea
                                        {...register("problem")}
                                        type="text"
                                        className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled"
                                        placeholder="Problema ..." 
                                        rows={6}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Solução</strong></h2>
                            </div>
                            <div className="body">
                                <div className="col-14">
                                    <textarea
                                        {...register("solution")}
                                        type="text"
                                        className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled"
                                        placeholder="Sua resposta" 
                                        rows={6}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>O Produto</strong></h2>
                            </div>
                            <div className="body">
                                <div className="col-14">
                                    <textarea
                                        {...register("product")}
                                        type="text"
                                        className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled"
                                        placeholder="Sua resposta" 
                                        rows={6}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2  style={{fontSize: "1rem"}}><strong>Estágio de maturidade do produto | TRL</strong></h2>
                            </div>
                            <div className="col-12">
                                <select id="customer_type" {...register("product_stage")} className="form-control select_styled_helper" defaultValue="">
                                    <option value="" disabled>Sua resposta</option>
                                    <option value="empresas_pequenas">TRL 4 - (MVP Concierge ou protótipo não funcional pronto mas sem usuários) <br />Validação do conceito em laboratório. A startup <br /> desenvolve um protótipo mais funcional e o testa em <br /> condições simuladas, ajustando recursos básicos.</option>
                                </select>
                            </div>
                        </div>
                        </div>
                            <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Proposta de Valor</strong></h2>
                            </div>
                            <div className="body">
                                <div className="col-14">
                                    <textarea
                                        {...register("value_proposition")}
                                        type="text"
                                        className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled"
                                        placeholder="Sua resposta" 
                                        rows={6}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Diferencial Competitivo</strong></h2>
                            </div>
                            <div className="body">
                                <div className="col-14">
                                    <textarea
                                        {...register("differential")}
                                        type="text"
                                        className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled"
                                        placeholder="Sua resposta" 
                                        rows={6}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Concorrência</strong></h2>
                            </div>
                            <div className="body">
                                <div className="col-14">
                                    <textarea
                                        {...register("competitors")}
                                        type="text"
                                        className="border border-gray-300 w-100 p-3 text-lg rounded-top rounded-bottom bg-gray-100 input_styled"
                                        placeholder="Sua resposta" 
                                        rows={6}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2  style={{fontSize: "1rem"}}><strong>Estágio de maturidade do negócio</strong></h2>
                            </div>
                            <div className="col-12">
                                <select id="customer_type" {...register("client_type")} className="form-control select_styled_helper" defaultValue="">
                                    <option value="" disabled>Sua resposta</option>
                                    <option value="empresas_pequenas">Pequenas empresas</option>
                                    <option value="empresas_grandes">Grandes empresas</option>
                                    <option value="consumidor_final">Consumidor final</option>
                                    <option value="governo">Governo</option>
                                    <option value="startups">Startups</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}