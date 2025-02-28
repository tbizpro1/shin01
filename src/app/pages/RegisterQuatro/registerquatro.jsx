import React, { useState } from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import { backgroundLogin } from '../../../assets/images';

const RegisterQuatro = ({ setPasso, register, onSubmit }) => {

  // const navigate = useNavigate() // cria uma instancia do useNavigate

  // onSubmit() // chama a funcao de submit do formulario

  // const handleClickNextStep = () => {
  //   Swal.fire({
  //     title: 'Sucesso!',
  //     text: 'Seu formulário foi enviado com sucesso.',
  //     icon: 'success',
  //     confirmButtonText: 'OK'
  //   }).then(() => {
  //     // setPasso(1)
  //     navigate('/')
  //   })
  // }

  const handleClickNextStep = () => {
    setPasso(6)
  }

  return (
    <div className="theme-purple authentication sidebar-collapse">
      <NavBar />
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: `url(${backgroundLogin})` }}></div>
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="">
              <div className="content">
                {/* Campos lado a lado */}
                <div className="row">
                  {[
                    { label: 'Como você conheceu a Startup Piauí?', 
                      name: 'discovered_startup', 
                      type: 'select', 
                      options: [
                        'Instagram', 
                        'LinkedIn', 
                        'Outro', 
                        'Fui numa imersão do Programa', 
                        'Campus Party', 
                        'Investe Nelas 1', 
                        'Investe Nelas 2', 
                        'Expo Favela 2023', 
                        'Expo Favela 2024', 
                        'Achei no Google', 
                        'Mídias Sociais', 
                        'Indicação', 
                        'Evento do Startup Piauí', 
                        'Outros'
                      ]
                      },
                    {
                      label: 'Selecione outros projetos que participa dentro do Startup Piauí',
                      name: 'other_projects',
                      type: 'checkbox',
                      options: [
                        'Startup Piauí 1',
                        'Startup Piauí 2',
                        'Startup Piauí 3',
                        'Startup Piauí 4',
                        'Startup Piauí 5',
                        'Startup Piauí 6',
                        'Startup Piauí 7',
                        'Start Piauí 8',
                        'Batalha do Conhecimento 1',
                        'Maratona de Negócios 1',
                        'Batalha de Startups 1',
                        'Investe Nelas 1',
                        'Investe Nelas 2',
                        'Expo Favela 2024',
                        'Expo Favela 2023'
                      ]
                      
                    }
                  ].map(({ label, name, type, options, placeholder }) => (
                    <div key={name} className="col-md-6">
                      <div className="form-group">
                        <label>{label}*</label>
                        {type === 'select' ? (
                          <select {...register(name)} className="form-control" required>
                            <option value="" disabled selected>{placeholder || 'Selecione uma opção'}</option>
                            {options.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : type === 'checkbox' ? (
                          options.map((option, index) => (
                            <div key={index} className="form-check d-flex justify-content-start">
                              <input
                                type="checkbox"
                                {...register(`${name}[${index}]`)}
                                className="form-check-input"
                                id={`${name}-${index}`}
                                value={option}
                              />
                              <label className="form-check-label" htmlFor={`${name}-${index}`}>
                                {option}
                              </label>
                            </div>
                          ))
                        ) : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="footer text-center">
                <button type="button" onClick={handleClickNextStep} className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
                  Avançar
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterQuatro;