import { useForm } from "react-hook-form"
import { createCompanyMetric } from "../../api/post/add-metrics-company"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"


export default function UpDateSettings({ setActiveTab, enterprise }) {
    const { handleSubmit, register } = useForm()
    const { token } = useContext(AuthContext)
    console.log(enterprise?.enterprise_id, "teste")
    const onSubmit = (data) => {
        const dataform = {
            ...data,
            enterprise: enterprise?.enterprise_id
        }
        createCompanyMetric(token, dataform)
            .then(response => {
                console.log("Deu bom", response);
                alert("Métrica registrada com sucesso!");
            })
            .catch(error => {
                console.log("Ocorreu um erro ao registrar métrica", error);
                alert("Erro ao registrar métrica. Tente novamente.");
            });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} role="tabpanel" className="tab-pane blog-page active" id="usersettings">
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
                                        {...register("investment_round_open")}
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
                                    <input
                                        {...register("capital_needed")}
                                        id="name"
                                        type="text"
                                        className="form-control select_styled"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Selecione o mês e o ano que deseja informar/atualizar</strong></h2>
                            </div>
                            <div className="col-12 d-flex gap-3 col-lg-4" style={{ marginBottom: "1rem" }}>
                                <select
                                    // {...register("captable")}
                                    className="form-control"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Mês
                                    </option>
                                    <option value="JAN">Janeiro</option>
                                    <option value="FEV">Fevereiro</option>
                                    <option value="MAR">Março</option>
                                    <option value="ABR">Abril</option>
                                    <option value="MAI">Maio</option>
                                    <option value="JUN">Junho</option>
                                    <option value="JUL">Julho</option>
                                    <option value="AGO">Agosto</option>
                                    <option value="SET">Setembro</option>
                                    <option value="OUT">Outubro</option>
                                    <option value="NOV">Novembro</option>
                                    <option value="DEZ">Dezembro</option>
                                </select>
                                <select
                                    // {...register("captable")}
                                    className="form-control"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Ano
                                    </option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="header">
                                <h2 style={{ fontSize: "1.0625rem" }}><strong>Captable</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    {...register("captable")}
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
                                    {...register("team_size")}
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
                                    {...register("total_clients")}
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
                                    {...register("new_clients")}
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
                                    {...register("revenue_period")}
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
                                    {...register("valuation")}
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
        </form>
    )
}