import React, { useContext, useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
// hook para captacao de inputs e que substitui o state
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/post/token";
import Cookies from "js-cookie";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import { backgroundLogin, logoShin, logoLoader } from "../../../assets/images";


const Login = () => {
    const {setToken, setUserId} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false)

    let navigate = useNavigate();

    const onSubmit = data => {
        console.log("aguardando resposta da api...")
        setIsLoading(true)

        loginApi(data).then(response => {
            Cookies.set("user_id", response.user.id)
            Cookies.set("token", response.token)
            setToken(Cookies.get("token"))
            setUserId(Cookies.get('user_id'))
            setIsLoading(false)
            return navigate("/workspace");
        })
    };

    return (
        <div className="theme-purple authentication sidebar-collapse">
            {
                !isLoading ? (
                    <>
                        <NavBar />
                        <div className="page-header">
                            <div className="page-header-image" style={{ backgroundImage: `url(${backgroundLogin})` }}></div>
                            <div className="container">
                                <div className="col-md-12 content-center">
                                    <div className="card-plain">
                                        <form
                                            className="form"
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <div className="header">
                                                <div className="logo-container">
                                                    <img src={logoShin} alt="SHIN Logo" />
                                                </div>
                                                <h5>Log in</h5>
                                            </div>
                                            <div className="content">
                                                <div className="input-group input-lg">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="E-mail"
                                                        {...register('email')}
                                                    />
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-account-circle"></i>
                                                    </span>
                                                </div>
                                                <div className="input-group input-lg">
                                                    <input type="password" placeholder="Password" className="form-control"
                                                        {...register('password')}
                                                    />
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-lock"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="footer text-center">
                                                <button
                                                    type="submit"
                                                    className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
                                                        SIGN IN
                                                </button>
                                                <h6 className="m-t-20">
                                                    <a href="forgot-password.html" className="link">Forgot Password?</a>
                                                </h6>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="page-loader-wrapper">
                            <div className="loader">
                                <div className="m-t-30"><img className="zmdi-hc-spin" src={logoLoader} width="48" height="48" alt="Compass" /></div>
                                <p>Please wait...</p>
                                {/* <p>Preparando área de trabalho ...</p> */}
                            </div>
                        </div>
                    </>
                )
            }
            <Outlet />
        </div>
    );
}

export default Login;