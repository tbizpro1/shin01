// // gerencia o estado de autenticacao dos usuarios

// import React, { createContext, useEffect, useState } from "react";
// import Cookies from 'js-cookie'
// import { redirect, useNavigate } from "react-router";
// import { GetUser } from "../api/get/user-profile";
// import userEnterprises from "../api/get/user-enterprises";
// import { loginApi } from "../api/post/token";

// export const AuthContext = createContext()// cria um contexto de autenticacao

// // funcao para transformar com seguranca valores null/undefined em strings vazias
// const sanitizeUserData = (data) => {
//     if (!data) return null;
//     return Object.fromEntries(
//         Object.entries(data).map(([key, value]) => [key, value ?? ""])
//     );
// }

// // provedor de autenticacao : gerencia dados do usuario
// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(null)
//     const [isAuthentication, setIsAuthentication] = useState(false)
//     const [userId, setUserId] = useState(null)
//     const [user, setUser] = useState(null)
//     const [enterprise, setEnterprise] = useState(null)
//     const [isLoading, setIsLoading] = useState(false)
//     const [isAdmin, setIsAdmin] = useState(false)

//     let navigate = useNavigate();

//     // efeito de autenticacao : quando o componente e montado verifica se ha um token e um id do usuario nos cookies
//     useEffect(() => {
//         const userToken = Cookies.get("token");
//         const userId = Cookies.get("user_id");
//         const role = Cookies.get('role');

//         if (userToken) {
//             GetUser(userId, userToken).then(response => {
//                 setUser(sanitizeUserData(response.data));
//             }).catch(error => {
//                 console.error("Erro ao buscar dados do usuário:", error);
//             });

//             userEnterprises(userId, userToken).then(response => {
//                 const responseData = Array.isArray(response) ? response : [];
//                 const uniqueData = responseData.filter((item, index, self) =>
//                     index === self.findIndex(t => t.enterprise_id === item.enterprise_id)
//                 );
//                 setEnterprise(sanitizeUserData(uniqueData));
//             }).catch(error => {
//                 console.error("Erro ao buscar empresas do usuário:", error);
//             });

//             setToken(userToken);
//             setIsAuthentication(true);

//             if (role === 'admin') {
//                 setIsAdmin(true);
//                 navigate('/admin');
//             } else {
//                 setIsAdmin(false);
//                 navigate('/workspace');
//             }
//         } else {
//             navigate('/');
//             throw new Error("Sem token, realize o login!");
//         }
//     }, [userId, token, navigate]);

//     const onSubmit = data => {
//         console.log("aguardando resposta da api...")
//         setIsLoading(true)

//         loginApi(data).then(response => {
//             Cookies.set("user_id", response.user.id)
//             Cookies.set("token", response.token)
//             setToken(Cookies.get("token"))
//             setUserId(Cookies.get('user_id'))
//             setIsLoading(false)

//             if (response.user.role === 'admin') {
//                 setIsAdmin(true)
//                 navigate('/admin')
//             } else {
//                 setIsAdmin(false)
//                 navigate('/workspace')
//             }
//         }).catch(error => {
//             console.error("Erro ao fazer login:", error);
//         }).finally(() => {
//             setIsLoading(false);
//         });
//     }

//     const logout = () => {
//         Cookies.remove('token')
//         Cookies.remove('user_id')
//         Cookies.remove('role')
//         setIsAdmin(false)
//         navigate('/')
//     }

//     return (
//         <AuthContext.Provider value={{
//             token,
//             isAuthentication,
//             setToken,
//             setUserId,
//             userId,
//             user,
//             setUser,
//             enterprise,
//             setIsLoading,
//             isLoading,
//             isAdmin,
//             onSubmit,
//             logout
//         }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

import React, { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { GetUser } from "../api/get/user-profile";
import userEnterprises from "../api/get/user-enterprises";
import { loginApi } from "../api/post/token";

export const AuthContext = createContext();

const sanitizeUserData = (data) => {
    if (!data) return null;
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, value ?? ""])
    );
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [enterprise, setEnterprise] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();

    // Efeito para verificar a autenticação ao carregar o componente
    useEffect(() => {
        const userToken = Cookies.get("token");
        const userId = Cookies.get("user_id");
        const role = Cookies.get('role');

        if (userToken && userId) {
            setIsLoading(true);

            // Busca os dados do usuário
            GetUser(userId, userToken).then(response => {
                setUser(sanitizeUserData(response.data));
            }).catch(error => {
                console.error("Erro ao buscar dados do usuário:", error);
                logout(); // Faz logout em caso de erro
            });

            // Busca as empresas do usuário
            userEnterprises(userId, userToken).then(response => {
                const responseData = Array.isArray(response) ? response : [];
                const uniqueData = responseData.filter((item, index, self) =>
                    index === self.findIndex(t => t.enterprise_id === item.enterprise_id)
                );
                setEnterprise(sanitizeUserData(uniqueData));
            }).catch(error => {
                console.error("Erro ao buscar empresas do usuário:", error);
            });

            setToken(userToken);
            setIsAuthentication(true);

            // Redireciona com base no papel do usuário
            if (role === 'admin') {
                setIsAdmin(true);
                navigate('/admin');
            } else {
                setIsAdmin(false);
                navigate('/workspace');
            }
        } else {
            navigate('/'); // Redireciona para o login se não houver token ou userId
        }

        setIsLoading(false);
    }, [navigate]);

    // Função para realizar o login
    const onSubmit = async (data) => {
        console.log("Aguardando resposta da API...");
        setIsLoading(true);

        try {
            const response = await loginApi(data);
            Cookies.set("user_id", response.user.id);
            Cookies.set("token", response.token);
            Cookies.set("role", response.user.role);

            setToken(response.token);
            setUserId(response.user.id);
            setIsAuthentication(true);

            if (response.user.role === 'admin') {
                setIsAdmin(true);
                navigate('/admin');
            } else {
                setIsAdmin(false);
                navigate('/workspace');
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Erro ao fazer login. Verifique suas credenciais.");
        } finally {
            setIsLoading(false);
        }
    };

    // Função para realizar o logout
    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('user_id');
        Cookies.remove('role');
        setToken(null);
        setUserId(null);
        setIsAuthentication(false);
        setIsAdmin(false);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{
            token,
            isAuthentication,
            setToken,
            setUserId,
            userId,
            user,
            setUser,
            enterprise,
            setIsLoading,
            isLoading,
            isAdmin,
            onSubmit,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};