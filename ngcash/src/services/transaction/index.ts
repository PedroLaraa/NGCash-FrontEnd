import { api } from "../../config";

export async function transaction(destinatario: string, valor: number, token: string ){

    const res = await api.post('/transactions',
    {
        destinatario,
        valor,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return res.data

}
