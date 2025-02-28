import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import { backgroundLogin } from '../../../assets/images';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import './send.css'

const Send = ({ onSubmit }) => {

  const navigate = useNavigate() // cria uma instancia do useNavigate

  onSubmit() // chama a funcao de submit do formulario

  const handleClickNextStep = () => {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Seu formulário foi enviado com sucesso.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="theme-purple authentication sidebar-collapse">
      <NavBar />
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: `url(${backgroundLogin})` }}></div>
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="">
              <div className="footer text-center">
                {/* <button type="button" onClick={handleClickNextStep} className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
                  Enviar
                </button> */}
                <button className="button" onClick={handleClickNextStep}>
                  <span className="text">Enviar formulário</span>
                  <span className="icon-send"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
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

export default Send;