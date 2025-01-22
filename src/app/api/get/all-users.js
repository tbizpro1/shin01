import { api } from "../api"

export default async function allUsers(token) {
    try {
        const response = await api.get(
            '/api/v1/users',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        return response.data
    } catch (error) {
        // console.error(error)
        throw new Error(error)
    }
};
