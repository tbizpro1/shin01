import { data } from "react-router"
import { api } from "../api"

export async function uploadImageProfile(user_id, token) {
    try {
        const response = await api.put(
            `/api/v1/users/picture/${user_id}`,
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
