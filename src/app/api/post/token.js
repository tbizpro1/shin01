import { api } from "../api";
import Cookies from 'js-cookie'

export async function loginApi(data) {
    console.log(data)
    try {
        const response = await api.post(
            '/api/v1/token/login', data,
        )
        console.log(response)
        return response.data
    } catch(error) {
        Cookies.remove('token')
        Cookies.remove('user_id')
        window.location.href = '/'
        console.log('Erro ao realizar login: ', error)
    }
}