import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";
import Inputmask from "react-input-mask";
import { useLocation } from "react-router-dom";


export default function ParterSetting({partner}) {

    console.log("wwwwwwww", partner)

    const { register, handleSubmit, reset, control } = useForm({
        defaultValues: {
            ...partner
        }
    })
    useEffect(() => {
        if (partner) {
            reset({
                ...partner,
                gender: partner.gender && ["m", "f", "p"].includes(partner.gender) ? partner.gender : null,
                weekly_hours_worked: partner.weekly_hours_worked !== undefined ? partner.weekly_hours_worked : null,
            });
        }
    }, [partner, reset])

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
    }

    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            <div className="card">
                <div className="header">
                    <h2 style={{fontSize:"1rem"}}><strong>Informações</strong> de sócio</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="body">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input {...register("username")}
                                        disabled
                                        type="text" className="form-control"
                                        placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input {...register("linkedin")} disabled type="text" className="form-control" placeholder="LindedIn" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input {...register("email")} disabled type="text" className="form-control" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input {...register("profession")} disabled type="text" className="form-control" placeholder="Profissão" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <Controller
                                        name="cpf"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Inputmask
                                                {...field}
                                                mask="999.999.999-99"
                                                className="form-control"
                                                disabled
                                                placeholder="CPF"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <Inputmask
                                        {...register("whatsapp_number")}
                                        mask="(99)99999-9999"
                                        className="form-control"
                                        disabled
                                        placeholder="WhatsApp"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <input
                                        {...register("city")}
                                        disabled type="text"
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
                                        disabled
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
                                        disabled type="number"
                                        className="form-control"
                                        placeholder="Horas semanais trabalhadas"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <select
                                        {...register("ethnicity")}
                                        className="form-control"
                                        defaultValue=""
                                        disabled
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
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <select
                                        {...register("gender")}
                                        className="form-control"
                                        disabled
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
                                    <Controller
                                        name="date_of_birth"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <Inputmask
                                                mask="99/99/9999"
                                                disabled
                                                className="form-control"
                                                placeholder="Data de nascimento"
                                                value={
                                                    value && value.includes("T")
                                                        ? value.split("T")[0].split("-").reverse().join("/") // Remove a parte da hora e formata para dd/mm/yyyy
                                                        : value && value.includes("-")
                                                            ? value.split("-").reverse().join("/") // Formata ISO para dd/mm/yyyy
                                                            : value // Caso o valor já esteja no formato dd/mm/yyyy
                                                }
                                                onChange={(e) => {
                                                    const inputDate = e.target.value; // Formato dd/mm/yyyy
                                                    if (inputDate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                                                        const [day, month, year] = inputDate.split("/");
                                                        const isoDate = `${year}-${month}-${day}T00:00:00.000Z`; // Converte para ISO com hora padrão
                                                        onChange(isoDate); // Envia o valor ISO para o estado/controlador
                                                    } else {
                                                        onChange(e.target.value); // Caso o valor seja inválido/incompleto
                                                    }
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <Controller
                                        name="cep"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Inputmask
                                                {...field}
                                                mask='99999-999'
                                                className="form-control"
                                                placeholder="CEP"
                                                disabled
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="form-group">
                                    <select
                                        {...register("education_level")}
                                        className="form-control"
                                        defaultValue=""
                                        disabled
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
                                        disabled type="text"
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
                                <input id="procheck1" disabled type="checkbox" />
                                <label for="procheck1">Profile Visibility For Everyone</label>
                            </div>
                            <div className="checkbox">
                                <input id="procheck2" disabled type="checkbox" />
                                <label for="procheck2">New task notifications</label>
                            </div>
                            <div className="checkbox">
                                <input id="procheck3" disabled type="checkbox" />
                                <label for="procheck3">New friend request notifications</label>
                            </div>
                        </div> */}
                        
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}