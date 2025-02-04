import { api } from "../api"

export default async function profileImageStartup(id, data, token) {
    console.log(id, data)
    try {
        const response = await api.post(
            `/api/v1/enterprises/file/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', 
                }
            }
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
};
