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
                                    <option value="trl0">TRL 0 - Não inciado</option>
            <option value="trl1">TRL 1 - Princípios básicos observados e documentados. A startup começa a entender a ciência básica por trás do problema que deseja resolver.</option>
            <option value="trl2">TRL 2 - Formulação do conceito da tecnologia. A equipe esboça ideias iniciais e soluções conceituais, mas ainda sem um modelo funcional.</option>
            <option value="trl3">TRL 3 - (Primeiro Protótipo, ainda que concierge) Prova de conceito experimental. Protótipos iniciais são construídos e testados em um ambiente controlado para validar a viabilidade técnica em pequena escala.</option>
            <option value="trl4">TRL 4 - (MVP Concierge ou protótipo não funcional pronto mas sem usuários) Validação do conceito em laboratório. A startup desenvolve um protótipo mais funcional e o testa em condições simuladas, ajustando recursos básicos.</option>
            <option value="trl5">TRL 5 - (MVP Concierge ou protótipo não funcional pronto e sendo testado com ao menos 1 usuário) Validação do conceito em ambiente relevante. O protótipo é testado em um ambiente que representa melhor o uso real, identificando melhorias e limitações em condições mais próximas do mercado.</option>
            <option value="trl6">TRL 6 - (MVP Pronto, ao menos 1 usuário) Demonstração em ambiente relevante. O produto mínimo viável (MVP) é lançado, com as funcionalidades principais em um ambiente de teste controlado. Nesta fase, o produto é testado por usuários iniciais e está pronto para capturar feedback direto, mas pode não estar totalmente otimizado.</option>
            <option value="trl7">TRL 7 - (MVP Pronto, ao menos 5 usuários) Demonstração em ambiente operacional. O produto é testado em um ambiente operacional real, podendo ser disponibilizado a um público mais amplo, com usuários.</option>
            <option value="trl8">TRL 8 - (Produto com ao menos 10 clientes) Sistema completo e qualificado. Nesta fase, o produto está totalmente desenvolvido e qualificado para produção em escala. Todos os componentes e funcionalidades foram testados e validados, o que permite à startup expandir suas operações e fornecer o produto para um público maior com qualidade e confiabilidade asseguradas.</option>
            <option value="trl9">TRL 9 - (produto com ao menos 20 clientes) Sistema comprovado em ambiente operacional. O produto atinge maturidade plena, com desempenho comprovado em ambientes reais e aceitação consolidada no mercado. A startup agora pode escalar suas vendas e operações com confiança, atendendo à demanda em um ambiente operacional contínuo e bem-sucedido.</option>
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
                                    <option value="procurando_equipe">Procurando Equipe</option>
<option value="ideacao">Ideação (modelando produto mas ainda sem MVP)</option>
<option value="mvp">MVP</option>
<option value="primeiros_testes">Primeiros testes (até 5 clientes)</option>
<option value="fase_beta">Fase Beta de Negócio (menos que 20 clientes)</option>
<option value="monetizacao">Monetização (Faturamento + 10k; mais que 20 clientes, 1 recompra)</option>
<option value="criacao_clientes">Criação de clientes (faturamento + 30k em 3 meses)</option>
<option value="construcao_empresa">Construção de empresa (faturamento + 1mi / 12 meses OU + 100k 3 meses OU investimento + 1mi)</option>
<option value="scale_up">Scale Up</option>

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