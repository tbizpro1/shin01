import { api } from "../api"

export async function getCaptable(token, enterprise_id) {
    console.log(token, enterprise_id, "este é um teste")
    try {
        const response = await api.get(
            `/api/v1/data_analisys/captable`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                },
                params:{
                    enterprise_id: enterprise_id   
                }
            }
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
};
