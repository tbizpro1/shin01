import React, { useState } from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import { backgroundLogin } from '../../../assets/images';

const RegisterDois = ({ setPasso, register }) => {

  const handleClickNextStep = () => {
    setPasso(4)
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
                    { label: 'Explique de forma breve o principal valor que sua startup entrega aos clientes (500 caracteres máx.)', name: 'value_proposition', type: 'text' },
                    { label: 'Descreva o que torna sua startup única no mercado (500 caracteres máx.)', name: 'differential', type: 'text' },
                    { label: 'Conte quem são os seus principais competidores hoje, possíveis substitutivos ou soluções comparáveis (500 caracteres máx.)', name: 'competitors', type: 'text' },
                    { label: 'Selecione o seu modelo de negócio', name: 'business_model', type: 'select', options: ['Modelo 1', 'Modelo 2'] },
                    { label: 'Selecione o modelo de receita de sua empresa', name: 'revenue_model', type: 'select', options: ['Modelo 1', 'Modelo 2'] },
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
              {/* </form> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterDois;