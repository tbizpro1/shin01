import { api } from "../api"

export default async function userEnterprises(user_id, token) {
    try {
        const response = await api.get(
            `/api/v1/user-enterprises/user/${user_id}`,
            {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) { 
        console.log(error)
    }
};
