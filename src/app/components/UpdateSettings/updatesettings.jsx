import React, { useContext, useEffect } from "react";

export default function UpDateSettings({ setActiveTab }) {
    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            <div className="card card_helper">
                <div className="row clearfix">
                    <div className="w-100 col-md-12">
                        {/* Container flex para os selects */}
                        <div className="d-flex gap-3" style={{ marginBottom: "1rem" }}>
                            <div className="form-group flex-1">
                                <div className="header">
                                    <h2 style={{ fontSize: "1.0625rem" }}><strong>Rodada de Investimento Aberta?</strong></h2>
                                </div>
                                <div className="col-12">
                                    <select
                                        // {...register("invested")}
                                        id="invested"
                                        className="form-control select_styled"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Sua resposta
                                        </option>
                                        <option value={true}>Não</option>
                                        <option value={false}>Sim</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group flex-1">
                                <div className="header">
                                    <h2 style={{ fontSize: "1.0625rem" }}><strong>Necessidade de Capital?</strong></h2>
                                </div>
                                <div className="col-12">
                                    <select
                                        // {...register("discovered_startup")}
                                        id="discovered_startup"
                                        className="form-control select_styled"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Sua resposta
                                        </option>
                                        <option value={true}>Não</option>
                                        <option value={false}>Sim</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Captable</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Quantidade de Sócios</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Tamanho do Time</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Total de Clientes</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Novos Clientes</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Porcentagem dos Sócios</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Receita</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Valuation</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("accelerator_name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        {/* Botão de submit */}
                    </div>
                </div>
            </div>
            <div className="w-100 col-lg-12 d-flex justify-content-end">
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        <strong>SALVAR ALTERAÇÕES</strong>
                    </button>
                </div>
            </div>
        </div>
    )
}