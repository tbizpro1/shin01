//desenvolvimento da camada de comunicacao com o endpoin PUT

import { api } from "../api";

function UpDateUser(id, data, token) {

    // console.log('fui acionado')
    try {
        const response = api.put(
            `/api/v1/users/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export default UpDateUser