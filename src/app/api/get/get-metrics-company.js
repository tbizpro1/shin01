import { api } from "../api"

export async function getMetricsCompany(token) {
    try {
        const response = await api.get(
            `/api/v1/company-metrics/`,
            {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
};
