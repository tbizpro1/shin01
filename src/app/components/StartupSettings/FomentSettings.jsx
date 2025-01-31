import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";
import Inputmask from "react-input-mask";
import { NumericFormat } from "react-number-format";


export default function FomentSettings({ register, control }) {
    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            <div className="card card_helper">
                <div className="row clearfix">
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Rodada de Investimento Aberta?</strong></h2>
                            </div>
                            <div className="col-12">
                                <select
                                    {...register("invested")}
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
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Necessidade de Capital?</strong></h2>
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
                                    <option value={true}>Estou pensando nessa possibilidade</option>
                                    <option value={false}>Sim</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Já foi Investida?</strong></h2>
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
                    </div>

                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Valor do Investimento</strong></h2>
                            </div>
                            <div className="col-12">
                                <Controller
                                    name="funding_value"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <NumericFormat
                                            value={value}
                                            onValueChange={(v) => {
                                                onChange(v.value);
                                            }}
                                            className="form-control select_styled"
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
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Recebeu Fomento?</strong></h2>
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
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="d-flex gap-3">
                            <div className="form-group flex-1">
                                <div className="">
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Valor do Fomento</strong></h2>
                                        </div>
                                        <div className="col-12">
                                            <Controller
                                                name="name"
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <NumericFormat
                                                        value={value}
                                                        onValueChange={(v) => {
                                                            onChange(v.value);
                                                        }}
                                                        className="form-control select_styled"
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
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <div className="col-12">

                                            <input
                                                // {...register("name")}
                                                id="name"
                                                type="text"
                                                className="form-control select_styled"
                                                placeholder="Nome da empresa"
                                            />
                                        
                                        </div>
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
                                        <div className="col-12">
                                            <Controller
                                                name="name"
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <NumericFormat
                                                        value={value}
                                                        onValueChange={(v) => {
                                                            onChange(v.value);
                                                        }}
                                                        className="form-control select_styled"
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
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                // {...register("name")}
                                                id="name"
                                                type="text"
                                                className="form-control select_styled"
                                                placeholder=""
                                            />
                                        </div>
                                    
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
                                        <div className="col-12">
                                            <Controller
                                                name="name"
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <NumericFormat
                                                        value={value}
                                                        onValueChange={(v) => {
                                                            onChange(v.value);
                                                        }}
                                                        className="form-control select_styled"
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
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <div className="col-12">
                                            <input
                                                // {...register("name")}
                                                id="name"
                                                type="text"
                                                className="form-control select_styled "
                                                placeholder=""
                                            />

                                        </div>
                                    
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
                                        <div className="col-12">
                                            <Controller
                                                name="name"
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <NumericFormat
                                                        value={value}
                                                        onValueChange={(v) => {
                                                            onChange(v.value);
                                                        }}
                                                        className="form-control select_styled"
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
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                        </div>
                                        <div className="col-12">

                                            <input
                                                // {...register("name")}
                                                id="name"
                                                type="text"
                                                className="form-control select_styled"
                                                placeholder=""
                                            />
                                        
                                        </div>
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
                                        <div className="col-12">
                                            <Controller
                                                name="name"
                                                control={control}
                                                render={({ field: { onChange, value } }) => (
                                                    <NumericFormat
                                                        value={value}
                                                        onValueChange={(v) => {
                                                            onChange(v.value);
                                                        }}
                                                        className="form-control select_styled"
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
                            </div>
                            <div className="form-group flex-1">
                                
                                    <div className="form-group">
                                        <div className="header">
                                            <h2><strong>Nome do Fomento</strong></h2>
                                            
                                        </div>
                                        <div className="col-12">

                                            <input
                                                // {...register("name")}
                                                id="name"
                                                type="text"
                                                className="form-control select_styled"
                                                placeholder=""
                                            />
                                        
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Já foi Acelerada?</strong></h2>
                            </div>
                            <div className="col-12">

                                <select
                                    {...register("boosting")}
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
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 1</strong></h2>
                            </div>
                            <div className="col-12">

                                <input
                                    // {...register("name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 2</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 3</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 4</strong></h2>
                            </div>
                            <div className="col-12">

                                <input
                                    // {...register("name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 col-md-12">
                        <div className="form-group">
                            <div className="header">
                                <h2><strong>Programa de Aceleração 5</strong></h2>
                            </div>
                            <div className="col-12">
                                <input
                                    // {...register("name")}
                                    id="name"
                                    type="text"
                                    className="form-control select_styled"
                                    placeholder=""
                                />

                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-12">
                        <button
                            type="submit"
                            className="btn btn-primary btn-round"
                        >
                            Salvar mudanças
                        </button>
                    </div> */}
                </div>
                {/* </div> */}
                {/* </form> */}
            </div>
        </div>
    )
}