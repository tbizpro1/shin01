import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";
import Inputmask from "react-input-mask";


export default function StartupSettings({ enterprise }) {
    console.log("teste", enterprise)
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

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row clearfix">
                        <div className="w-100 col-md-12">
                            <div className="form-group">
                                <div className="header">
                                    <h2><strong>O Problema</strong></h2>
                                </div>
                                <div className="body">
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
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
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
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
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 col-md-12">
                            <div className="form-group">
                                <div className="header">
                                    <h2><strong>Estágio de Maturidade do Produto | TRL</strong></h2>
                                </div>
                                <div className="body">
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 col-md-12">
                            <div className="form-group">
                                <div className="header">
                                    <h2><strong>Proposta de Valor</strong></h2>
                                </div>
                                <div className="body">
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
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
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
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
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 col-md-12">
                            <div className="form-group">
                                <div className="header">
                                    <h2><strong>Estágio de Maturidade do Negócio</strong></h2>
                                </div>
                                <div className="body">
                                    <div className="col-12">

                                        <input
                                            type="text"
                                            className="border border-gray-300 p-5 text-lg rounded-top rounded-bottom bg-gray-100"
                                            placeholder="Sua resposta" />
                                    </div>
                                </div>
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
                </form>
            </div>
        </div>
    )
}