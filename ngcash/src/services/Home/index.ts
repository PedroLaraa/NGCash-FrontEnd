import { api } from "../../config";

import { IBalance } from "../../interfaces/IBalance";

export async function balanceRequest(token: string) {
    try {

        const request = await api.get('/balance', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return request.data

    } catch (error) {
        return error
    }
}
