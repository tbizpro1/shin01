import React, { useState } from 'react';
import NavBar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import { backgroundLogin } from '../../../assets/images';

const Register = ({ setPasso, register }) => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   startupName: '',
  //   website: '',
  //   instagram: '',
  //   linkedin: '',
  //   foundationYear: '',
  //   phone: '',
  //   cnpj: '',
  //   state: '',
  //   city: '',
  //   summary: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  const hadleClickNextStep = () => {
    setPasso(2)
  }

  return (
    <div className="theme-purple authentication sidebar-collapse">
      <NavBar />
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: `url(${backgroundLogin})` }}></div>
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="">
              <div className="header text-center">
                <h5>Cadastro</h5>
              </div>
              <div className="content">
                {/* Campos lado a lado */}
                <div className="row">
                  {[
                    { label: 'Email', name: 'enterprise_email', type: 'email' },
                    { label: 'Nome da Startup', name: 'name', type: 'text' },
                    { label: 'Endereço do site da sua startup ou "NÃO TEM"', name: 'website', type: 'text' },
                    { label: 'Link do Instagram da Startup ou "NÃO TEM"', name: 'instagram', type: 'text' },
                    { label: 'Link do LinkedIn da Startup ou "NÃO TEM"', name: 'enterprise_linkedin', type: 'text' },
                    { label: 'Ano de Fundação (ex.: 2024)', name: 'foundation_year', type: 'text' },
                    { label: 'Telefone', name: 'whatsapp', type: 'text' },
                    { label: 'CNPJ (caso tenha)', name: 'cnpj', type: 'text' },
                    { label: 'Estado', name: 'enterprise_state', type: 'text' },
                    { label: 'Cidade', name: 'enterprise_city', type: 'text' },
                    { label: 'Sumário', name: 'summary', type: 'text' },
                  ].map(({ label, name, type }) => (
                    <div key={name} className="col-md-6">
                      <div className="form-group">
                        <label>{label}*</label>
                        <input
                          {...register(name)}
                          type={type}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Campo "summary" ocupando toda a largura */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Breve resumo sobre sua empresa ou projeto (200 caracteres máx.)*</label>
                      <input
                        {...register("summary")}
                        type="text"
                        name="summary"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer text-center">
                <button type="button" onClick={hadleClickNextStep} className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
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

export default Register;


// import React from 'react';
// import NavBar from '../../components/NavBar/navbar';
// import Footer from '../../components/Footer/footer';

// import { backgroundLogin, logo, logoShin } from "../../../assets/images";

// const SignUp = () => {
//   return (
//     <div className="theme-purple authentication sidebar-collapse">
//       <NavBar />
//       <div className="page-header">
//         <div className="page-header-image" style={{ backgroundImage: `url(${backgroundLogin})` }}></div>
//         <div className="container">
//           <div className="col-md-12 content-center">
//             <div className="card-plain">
//               <form className="form" method="" action="">
//                 <div className="header">
//                   <div className="logo-container">
//                     <img src="assets/images/logo.svg" alt="" />
//                   </div>
//                   <h5>Sign Up</h5>
//                 </div>
//                 <div className="content">
//                   <div className="input-group">
//                     <input type="text" className="form-control" placeholder="Enter User Name" />
//                     <span className="input-group-addon">
//                       <i className="zmdi zmdi-account-circle"></i>
//                     </span>
//                   </div>
//                   <div className="input-group">
//                     <input type="text" className="form-control" placeholder="Enter Email" />
//                     <span className="input-group-addon">
//                       <i className="zmdi zmdi-email"></i>
//                     </span>
//                   </div>
//                   <div className="input-group">
//                     <input type="password" placeholder="Password" className="form-control" />
//                     <span className="input-group-addon">
//                       <i className="zmdi zmdi-lock"></i>
//                     </span>
//                   </div>
//                   <div className="input-group">
//                     <input type="password" placeholder="Confirm Password" className="form-control" />
//                     <span className="input-group-addon">
//                       <i className="zmdi zmdi-lock"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="checkbox">
//                   <input id="terms" type="checkbox" />
//                   <label htmlFor="terms">
//                   Eu li e concordo com os <a href="javascript:void(0);">termos de uso</a>
//                   </label>
//                 </div>
//                 <div className="footer text-center">
//                   <a href="index.html" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">Inscrever-se</a>
//                   <h6 className="m-t-20"><a className="link" href="/">Você já é membro?</a></h6>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default SignUp;