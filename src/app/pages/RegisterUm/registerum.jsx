import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import { backgroundLogin } from '../../../assets/images';

const RegisterUm = ({ setPasso, register }) => {

  const handleClickNextStep = () => {
    setPasso(3)
  }

  return (
    <div className="theme-purple authentication sidebar-collapse">
      <NavBar />
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: `url(${backgroundLogin})` }}></div>
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="row">
              <div className="content">
                {/* Campos lado a lado */}
                <div className="row">
                  {[
                    { label: 'Selecione o mercado que sua startup atua', name: 'market', type: 'select', options: ['Tecnologia', 'Saúde', 'Educação', 'Financeiro', 'Outro'] },
                    { label: 'Indique o mercado inicial de sua startup, ou escreva "NÃO SEI"', name: 'segment', type: 'text' },
                    { label: 'Descreva o problema que resolve, ou escreva "NÃO SEI"', name: 'problem', type: 'text' },
                    { label: 'Descreva brevemente a solução que sua startup oferece, ou escreva "NÃO SEI"', name: 'solution', type: 'text' },
                    { label: 'Escolha o tipo de cliente de sua solução', name: 'client_type', type: 'select', options: ['tipo 1', 'tipo 2', 'Tipo 3'] },
                    { label: 'Nos fale sobre seu produto, o que ele faz, quais as principais funcionalidades dele, ou escreva "NÃO SEI"', name: 'product', type: 'text' },
                    { label: 'Selecione o estágio em que seu produto se encontra', name: 'product_stage', type: 'select', options: ['Estágio 1', 'Estágio 2', 'Estágio 3'] },
                    ].map(({ label, name, type, options, placeholder }) => (
                      <div key={name} className="col-md-6">
                        <div className="form-group">
                          <label>{label}*</label>
                          {type === 'select' ? (
                            <select {...register(name)} defaultValue='' className="form-control" required>
                              <option value="" disabled>{placeholder || 'Selecione uma opção'}</option>
                              {options.map(option => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              {...register(name)}
                              type={type}
                              className="form-control"
                              required
                            />
                          )}
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

export default RegisterUm;