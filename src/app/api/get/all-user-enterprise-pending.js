import { api } from "../api"


export default async function allUserEnterprisePending(enterprise_id, token) {
    try {
        const response = await api.get(
            `/api/v1/user-enterprises/enterprise/${enterprise_id}`,
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
