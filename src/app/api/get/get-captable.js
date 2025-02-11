import { api } from "../api"

export async function getCaptable(token, enterprise_id) {
    try {
        const response = await api.get(
            `/api/v1/data_analisys/captable,`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                },
                params:{
                    enterprise_id
                }
            }
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
};
