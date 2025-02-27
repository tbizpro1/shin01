import React, { useState } from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import { backgroundLogin } from '../../../assets/images';
import { NumericFormat } from 'react-number-format';
import { useForm, Controller } from 'react-hook-form';

const RegisterTres = ({ setPasso, register, control }) => {

  const handleClickNextStep = () => {
    setPasso(5)
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
                    { label: 'Já foi investida?', name: 'invested', type: 'select', options: ['Sim', 'Não'] },
                    { label: 'Informe o valor total em reais, se houver investimento', name: 'investment_value', type: 'currency' },
                    { label: 'Adquiriu apoio financeiro de programas públicos ou privados?', name: 'boosting', type: 'select', options: ['Sim', 'Não'] },
                    { label: 'Especifique o nome do programa ou instituição de fomento', name: 'funding_program', type: 'text' },
                    { label: 'Informe o valor em reais recebidos de fomento', name: 'funding_value', type: 'currency' },
                    { label: 'Já participou de programas de aceleração?', name: 'accelerated', type: 'select', options: ['Sim', 'Não'] },
                    { label: 'Informe o nome da aceleradora, se houver', name: 'accelerator_name', type: 'text' },
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
                        ) : type === 'currency' ? (
                          <Controller
                            name={name}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <NumericFormat
                                {...field}
                                className="form-control"
                                required
                                thousandSeparator="."
                                decimalSeparator=","
                                prefix="R$ "
                                allowNegative={false}
                                placeholder="R$ 0,00"
                                onValueChange={(values) => {
                                  field.onChange(values.floatValue); // Atualiza o valor do campo
                                }}
                              />
                            )}
                          />
                        ) : (
                          <input
                            {...register(name)}
                            type={type}
                            className="form-control"
                            required
                            placeholder={placeholder || ''}
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

export default RegisterTres;