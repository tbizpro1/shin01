import React, { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { redirect, useNavigate } from "react-router";
import { GetUser } from "../api/get/user-profile";
import userEnterprises from "../api/get/user-enterprises";
import { loginApi } from "../api/post/token";

export const AuthContext = createContext()

// Function to safely transform null/undefined values to empty strings
const sanitizeUserData = (data) => {
    if (!data) return null;
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, value ?? ""])
    );
}

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [isAuthentication, setIsAuthentication] = useState(false)
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)
    const [enterprise, setEnterprise] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        const userToken = Cookies.get("token");
        const userId = Cookies.get("user_id");

        if (userToken !== null) {
            // Sanitize user data before setting
            GetUser(userId, userToken).then(response => {
                setUser(sanitizeUserData(response.data))
            })

            userEnterprises(userId, userToken).then(response => {
                setEnterprise(sanitizeUserData(response))
            })

            setToken(userToken)
            setIsAuthentication(true)
            redirect(`/workspace`)
        } else {
            redirect(`/`);
            throw new Error("Sem token, realize o login!")
        }
    }, [userId, token]);

    const onSubmit = data => {
        console.log("aguardando resposta da api...")
        setIsLoading(true)

        loginApi(data).then(response => {
            Cookies.set("user_id", response.user.id)
            Cookies.set("token", response.token)
            setToken(Cookies.get("token"))
            setUserId(Cookies.get('user_id'))
            setIsLoading(false)
            return navigate("/workspace")
        })
    }

    const logout = () => {
        Cookies.remove('token')
        Cookies.remove('user_id')
        return navigate('/')
    }

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
            onSubmit, 
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}