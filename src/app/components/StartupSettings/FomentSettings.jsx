import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";
import Inputmask from "react-input-mask";
import { NumericFormat } from "react-number-format";


export default function FomentSettings({ enterprise }) {
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

                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                {/* <div className="body"> */}
                <div className="row clearfix">
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Rodada de Investimento Aberta?</strong></h2>
                            </div>
                            <select
                                // {...register("invested")}
                                id="invested"
                                className="form-control"
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
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Necessidade de Capital?</strong></h2>
                            </div>
                            <select
                                // {...register("invested")}
                                id="invested"
                                className="form-control"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Sua resposta
                                </option>
                                <option value={true}>Não</option>
                                <option value={true}>Estou pensando nessa possibilidade</option>
                                <option value={false}>Sim</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Já foi Investida?</strong></h2>
                            </div>
                            <select
                                // {...register("invested")}
                                id="invested"
                                className="form-control"
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

                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Valor do Investimento</strong></h2>
                            </div>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <NumericFormat
                                        value={value}
                                        onValueChange={(v) => {
                                            onChange(v.value);
                                        }}
                                        className="form-control"
                                        placeholder="R$ 0,00"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix="R$ "
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Recebeu Fomento?</strong></h2>
                            </div>
                            <select
                                // {...register("invested")}
                                id="invested"
                                className="form-control"
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
                    <div className="w-100 col-md-12">
                        <div className="d-flex gap-3">
                            <div className="form-group flex-1">
                                <div className="">
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Valor do Fomento</strong></h2>
                                        </div>
                                        <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <NumericFormat
                                        value={value}
                                        onValueChange={(v) => {
                                            onChange(v.value);
                                        }}
                                        className="form-control"
                                        placeholder="R$ 0,00"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix="R$ "
                                    />
                                )}
                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <input
                                            // {...register("name")}
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            placeholder="Nome da empresa"
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="d-flex gap-3">
                            <div className="form-group flex-1">
                                <div className="">
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Valor do Fomento</strong></h2>
                                        </div>
                                        <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <NumericFormat
                                        value={value}
                                        onValueChange={(v) => {
                                            onChange(v.value);
                                        }}
                                        className="form-control"
                                        placeholder="R$ 0,00"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix="R$ "
                                    />
                                )}
                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <input
                                            // {...register("name")}
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="d-flex gap-3">
                            <div className="form-group flex-1">
                                <div className="">
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Valor do Fomento</strong></h2>
                                        </div>
                                        <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <NumericFormat
                                        value={value}
                                        onValueChange={(v) => {
                                            onChange(v.value);
                                        }}
                                        className="form-control"
                                        placeholder="R$ 0,00"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix="R$ "
                                    />
                                )}
                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <input
                                            // {...register("name")}
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="d-flex gap-3">
                            <div className="form-group flex-1">
                                <div className="">
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Valor do Fomento</strong></h2>
                                        </div>
                                        <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <NumericFormat
                                        value={value}
                                        onValueChange={(v) => {
                                            onChange(v.value);
                                        }}
                                        className="form-control"
                                        placeholder="R$ 0,00"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix="R$ "
                                    />
                                )}
                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <input
                                            // {...register("name")}
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="d-flex gap-3">
                            <div className="form-group flex-1">
                                <div className="">
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Valor do Fomento</strong></h2>
                                        </div>
                                        <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <NumericFormat
                                        value={value}
                                        onValueChange={(v) => {
                                            onChange(v.value);
                                        }}
                                        className="form-control"
                                        placeholder="R$ 0,00"
                                        thousandSeparator="."
                                        decimalSeparator=","
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix="R$ "
                                    />
                                )}
                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <input
                                            // {...register("name")}
                                            id="name"
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Já foi Acelerada?</strong></h2>
                            </div>
                            <select
                                // {...register("invested")}
                                id="invested"
                                className="form-control"
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
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 1</strong></h2>
                            </div>
                            <input
                                // {...register("name")}
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 2</strong></h2>
                            </div>
                            <input
                                // {...register("name")}
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 3</strong></h2>
                            </div>
                            <input
                                // {...register("name")}
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 4</strong></h2>
                            </div>
                            <input
                                // {...register("name")}
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 5</strong></h2>
                            </div>
                            <input
                                // {...register("name")}
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder=""
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
                {/* </div> */}
                {/* </form> */}
            </div>
        </div>
    )
}