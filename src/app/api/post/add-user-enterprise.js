import { api } from "../api"

// adicionar sócio, registrar convite

export default async function addUserEnterprise(user_id, enterprise_id, token) {
    console.log(user_id, enterprise_id, token)
    try {
        const response = await api.post(
            '/api/v1/user-enterprises',
            {
                user_id: user_id,
                enterprise_id: enterprise_id,
                role: "partner" //sócio
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        return response.data
    } catch (error) {
        console.log(error)
    }
};
