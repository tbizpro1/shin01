import { api } from "../api"

// adicionar sócio, registrar convite

export default async function addProfileImage(user_id, token, data) {
    console.log(user_id, data, token)
    try {
        const response = await api.post(
            `/api/v1/users/picture/${user_id}`,
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
        console.log(error)
    }
};
