import { api } from "../../config";

export async function balanceRequest(token: string) {
    try {

        const request = await api.get('/balance', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (request.data.auth === false) {
            return alert("Faça logout e depois login para ver sua conta!")
        }

        return request.data

    } catch (error) {
        return error
    }
}
