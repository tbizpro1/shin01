import { api } from "../api"

export async function addMetricsCompany(data, token) {
    console.log("dados, de métricas: ",data)
    try {
        const response = await api.post(
            `/api/v1/company-metrics/`,
            data,
            {
                'headers':{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        throw new Error(error)
    }
};
