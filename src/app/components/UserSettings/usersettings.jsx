import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";
import Inputmask from "react-input-mask";


export default function UserSettings() {

    const {
        user, token
    } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: user
    })
    useEffect(() => {
        if (user) {
            reset(user)
        }
    }, [user, reset])

    const onSubmit = (data) => {
        console.log(data)
        UpDateUser(user.id, data, token).then(response => console.log(" reposta da api: ", response))
    }

    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            {/* <div className="card">
                <div className="header">
                    <h2><strong>Security</strong> Settings</h2>
                </div>
                <form>
                <div className="body">
                    <div className="form-group">
                        <input {...register("username")} type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Current Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="New Password" />
                    </div>
                    <button className="btn btn-info btn-round">Save Changes</button>
                </div>
                </form>
            </div> */}
            <div className="card">
                <div className="header">
                    <h2><strong>Informações</strong> do usuário</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="body">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input {...register("username")} 
                                    type="text" className="form-control" 
                                    placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input {...register("linkedin")} type="text" className="form-control" placeholder="LindedIn" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input {...register("email")} type="text" className="form-control" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input {...register("profession")} type="text" className="form-control" placeholder="Profissão" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <Inputmask
                                        // {...register("cpf")}
                                        mask="999.999.999-99"
                                        className="form-control"
                                        placeholder="CPF"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    {/* <input 
                                    {...register("phone")} 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="WhatsApp" /> */}
                                    <Inputmask
                                        {...register("whatsapp_number")}
                                        mask="(99)99999-9999"
                                        className="form-control"
                                        placeholder="WhatsApp"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input
                                        {...register("city")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Cidade" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <select
                                        {...register("state")} 
                                        className="form-control"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            UF
                                        </option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input
                                        {...register("weekly_hours_worked")}
                                        type="number"
                                        className="form-control"
                                        placeholder="Horas semanais trabalhadas"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    {/* <input
                                        // {...register("ethnicity")} 
                                        type="text"
                                        className="form-control"
                                        placeholder="Raça"
                                        defaultValue=''
                                    /> */}
                                    <select
                                        {...register("ethnicity")} 
                                        className="form-control"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Etnia
                                        </option>
                                        <option value="white">Branca</option>
                                        <option value="black">Preta</option>
                                        <option value="brown">Parda</option>
                                        <option value="yellow">Amarela</option>
                                        <option value="indigenous">Indígena</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                                <input 
                                    // {...register("state")} 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Gênero" 
                                />
                            </div>
                        </div> */}
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <select
                                        {...register("gender")} 
                                        className="form-control"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Escolha o gênero
                                        </option>
                                        <option value="m">Masculino</option>
                                        <option value="f">Feminino</option>
                                        {/* <option value="NotBinary">Não binário</option> */}
                                        <option value="p">Prefiro não responder</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <Inputmask
                                        // {...register("date_of_birth")} 
                                        mask='99/99/9999'
                                        className="form-control"
                                        placeholder="Data de nascimento"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <Inputmask
                                        // {...register("cep")} 
                                        mask='99999-999'
                                        className="form-control"
                                        placeholder="CEP"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <select
                                        {...register("education_level")} 
                                        className="form-control"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Escolaridade
                                        </option>
                                        <option value="nenhuma">Sem escolaridade</option>
                                        <option value="fundamental">Ensino Fundamental</option>
                                        <option value="medio">Ensino Médio</option>
                                        <option value="graduacao">Graduação</option>
                                        <option value="especializacao">Especialização</option>
                                        <option value="mestrado">Mestrado</option>
                                        <option value="doutorado">Doutorado</option>
                                        <option value="pos-doutorado">Pós-Doutorado</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input
                                        {...register("institution")} 
                                        type="text"
                                        className="form-control"
                                        placeholder="Instituição"
                                    />
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea rows="4" className="form-control no-resize" placeholder="Endereço"></textarea>
                                    </div>
                                </div> */}

                            {/* <div className="col-md-12">
                            <div className="checkbox">
                                <input id="procheck1" type="checkbox" />
                                <label for="procheck1">Profile Visibility For Everyone</label>
                            </div>
                            <div className="checkbox">
                                <input id="procheck2" type="checkbox" />
                                <label for="procheck2">New task notifications</label>
                            </div>
                            <div className="checkbox">
                                <input id="procheck3" type="checkbox" />
                                <label for="procheck3">New friend request notifications</label>
                            </div>
                        </div> */}
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary btn-round">Salvar mudanças</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}