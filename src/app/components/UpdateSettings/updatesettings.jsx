import { useForm } from "react-hook-form"
import { addMetricsCompany } from "../../api/post/add-metrics-company"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"


export default function UpDateSettings({setActiveTab, enterprise }) {
    const {handleSubmit, register} = useForm()
    const {token} =  useContext(AuthContext)
    console.log(enterprise?.enterprise_id,"teste")
    const onSubmit = (data) => {
        const formattedData = {
            enterprise_id: enterprise?.enterprise_id ?? null, // Garante que tenha um ID válido
            team_size: Number(data.team_size) || null,
            revenue_period: Number(data.revenue_period) || null,
            total_clients: Number(data.total_clients) || null,
            new_clients: Number(data.new_clients) || null,
            investment_round_open: data.investment_round_open === "true", // Converte para booleano
            capital_needed: Number(data.capital_needed) || null,
            value_foment: Number(data.value_foment) || "null",
            valuation: String(data.valuation) || null,
            date_recorded: data.date_recorded || "null",
            current_capital: data.current_capital || "null",
            captable: data.captable || null,
        };
        addMetricsCompany(formattedData, token).then(
            response => console.log("deu bom",response)
        ).catch(
            error => console.log("ocorreu um erro ao registrar métrica", error)
        ) 
    }
    // faltantes: capital, quatidade de sócios, porcetagem de sócios

    // {
    //     "current_capital": null,
    // }

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