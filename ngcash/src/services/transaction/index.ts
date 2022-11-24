import { api } from "../../config";

export async function transaction(destinatario: string, valor: number, token: string ){

    const response = await api.post('transaction',
    {
        destinatario,
        valor,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.data

}
