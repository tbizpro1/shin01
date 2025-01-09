import { api } from "../api";

export async function loginApi(data) {
    console.log(data)
    try {
        const response = await api.post(
            '/api/v1/token/login', data,
        )
        console.log(response)
        return response.data
    } catch(error) {
        console.log('Erro ao realizar login: ', error)
    }
}