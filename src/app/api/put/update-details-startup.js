import { api } from "../api"

export default async function updateDetailsStartup(id, data, token) {
    try {
        const response = await api.put(
            `/api/v1/enterprises/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
};
