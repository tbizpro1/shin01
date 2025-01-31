import { useState, useEffect } from "react";
import { GetUser } from "../api/get/user-profile"; // Importe sua função GetUser

const useGetUser = (id, token) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        if (!id || !token) return; // Verifica se o id e o token foram fornecidos

        setIsLoading(true);
        setError(null); // Reseta o erro antes de tentar buscar novamente

        try {
            // Chama a função GetUser passando o id e o token
            const response = await GetUser(id, token);
            setUser(response.data); // Armazena os dados do usuário
        } catch (err) {
            setError(err.message || "Erro ao buscar usuário"); // Captura o erro
        } finally {
            setIsLoading(false);
        }
        };

        fetchUser();
    }, [id, token]); // O efeito depende do id e do token

    return { user, isLoading, error };
};

export default useGetUser;
