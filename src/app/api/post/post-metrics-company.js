import { api } from '../api';
export async function postMetricsCompany(data, token) {
    try {

        const response = await api.post(
            `/api/v1/company-metrics/`,
            data,
            {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            }
        )

        return response.data
    } catch (error) {
        console.error(error)
    }
};
