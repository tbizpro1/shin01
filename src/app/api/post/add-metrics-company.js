import { api } from "../api"

export async function addMetricsCompany(data, enterprise_id, token) {
    try {
        const response = await api.post(
            `/api/v1/company-metrics/`,
            {
                ...data,
                enterprise: enterprise_id
            },
            {
                'headers':{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response
    } catch (error) {
        throw new Error(error)
    }
};
