import { api } from "../api"

export default async function getEnterpriseById(id, token) {
    try {

        const response = await api.get(
            `/api/v1/enterprises/${id}`,
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
