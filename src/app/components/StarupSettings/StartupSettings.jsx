import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";
import Inputmask from "react-input-mask";


export default function StartupSettings({enterprise}) {
    console.log("teste",enterprise)
    // const {
    //     user, token, enterprise
    // } = useContext(AuthContext)
    // console.log(enterprise)
    const { register, handleSubmit, reset, control } = useForm({
        defaultValues: {
            ...enterprise
        }
    })
    useEffect(() => {
        if (enterprise) {
            reset({
                ...enterprise,
                // gender: user.gender && ["m", "f", "p"].includes(user.gender) ? user.gender : null,
                // weekly_hours_worked: user.weekly_hours_worked !== undefined ? user.weekly_hours_worked : null,
            });
        }
    }, [enterprise, reset])

    const onSubmit = (data) => {
        const sanitizedData = {
            ...data,
            weekly_hours_worked:
                data.weekly_hours_worked && !isNaN(parseInt(data.weekly_hours_worked))
                    ? parseInt(data.weekly_hours_worked)
                    : null,
            date_of_birth:
                isValidDate(data.date_of_birth)
                    ? data.date_of_birth
                    : null,
        };

        console.log("Dados sanitizados:", sanitizedData);

        // // Envio dos dados para a API
        // UpDateUser(user.id, sanitizedData, token)
        //     .then((response) => {
        //         window.location.reload();
        //         console.log("Resposta da API:", response);
        //     })
        //     .catch((error) => {
        //         console.error("Erro ao atualizar o usuário:", error);
        //     });
    }
    const isValidDate = (date) => {
        return !isNaN(Date.parse(date));
    };
    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            <div className="card">
                <div className="header">
                    <h2><strong>Informações</strong> de startup</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="body">
                        <div className="row clearfix">
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="name" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Nome da empresa
                                    </label>
                                    <input
                                        {...register("name")}
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nome da empresa"
                                    />
                                </div>
                            </div>
                            <div className="w-full col-md-12">
                                <div className="form-group">
                                    <label htmlFor="problem" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Problema
                                    </label>
                                    <textarea
                                        {...register("problem")}
                                        id="problem"
                                        type="text"
                                        className="form-control"
                                        placeholder="Problema"
                                    />
                                </div>
                            </div>
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="value_proposition" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Proposta de valor
                                    </label>
                                    <textarea
                                        {...register("value_proposition")}
                                        id="value_proposition"
                                        type="text"
                                        className="form-control"
                                        placeholder="Proposta de valor"
                                    />
                                </div>
                            </div>
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="description" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Descrição da empresa
                                    </label>
                                    <textarea
                                        {...register("description")}
                                        id="description"
                                        type="text"
                                        className="form-control"
                                        placeholder="Descrição da empresa"
                                    />
                                </div>
                            </div>
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="solution" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Solução
                                    </label>
                                    <textarea
                                        {...register("solution")}
                                        id="solution"
                                        type="text"
                                        className="form-control"
                                        placeholder="Solução"
                                    />
                                </div>
                            </div>
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="differential" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Diferencial da empresa
                                    </label>
                                    <textarea
                                        {...register("differential")}
                                        id="differential"
                                        type="text"
                                        className="form-control"
                                        placeholder="Diferencial da empresa"
                                    />
                                </div>
                            </div>
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="product" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Produto
                                    </label>
                                    <textarea
                                        {...register("product")}
                                        id="product"
                                        type="text"
                                        className="form-control"
                                        placeholder="Produto"
                                    />
                                </div>
                            </div>
                            <div className="w-100 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="competitors" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Competidores
                                    </label>
                                    <textarea
                                        {...register("competitors")}
                                        id="competitors"
                                        type="text"
                                        className="form-control"
                                        placeholder="Competidores"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="invested" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Já foi investida?
                                    </label>
                                    <select
                                        {...register("invested")}
                                        id="invested"
                                        className="form-control"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Já foi investida?
                                        </option>
                                        <option value={true}>Investida</option>
                                        <option value={false}>Não Investida</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="boosting" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Já foi acelerada?
                                    </label>
                                    <select
                                        {...register("boosting")}
                                        id="boosting"
                                        className="form-control"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Já foi acelerada?
                                        </option>
                                        <option value={true}>Acelerada</option>
                                        <option value={false}>Não acelerada</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="programm" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Programa
                                    </label>
                                    <input
                                        {...register("programm")}
                                        id="programm"
                                        type="text"
                                        className="form-control"
                                        placeholder="Programa"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="value_invested" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Valor investido
                                    </label>
                                    <input
                                        {...register("value_invested")}
                                        id="value_invested"
                                        type="number"
                                        className="form-control"
                                        placeholder="Valor investido"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="name_foment" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Nome do fomento
                                    </label>
                                    <input
                                        {...register("name_foment")}
                                        id="name_foment"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nome do fomento"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <label htmlFor="value_foment" style={{ color: '#fa6432', fontSize: 'small' }}>
                                        Valor de fomento
                                    </label>
                                    <input
                                        {...register("value_foment")}
                                        id="value_foment"
                                        type="number"
                                        className="form-control"
                                        placeholder="Valor de fomento"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-round"
                                >
                                    Salvar mudanças
                                </button>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}