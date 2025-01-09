import { api } from "../api"

export default async function allUsers() {
    try {
        const response = await api.get(
            '/api/v1/users',
        )

        return response.data
    } catch (error) {
        console.error(error)
    }
};
