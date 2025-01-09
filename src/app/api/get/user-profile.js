import { api } from "../api";

export const GetUser = (id, token) => {
    const response = api.get(`/api/v1/users/${id}`,
        {
            headers:{
                'Authorization':`Bearer ${token}` 
            }
        }
    ) 
    //traz as informacoes do usuario pelo id
    return response
}