import { api } from "../api"

export default async function removeInvite(ue_id, token) {
    try {
        const response = await api.delete(
            `/api/v1/user-enterprises/${ue_id}`,
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
