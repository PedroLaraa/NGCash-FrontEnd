import { api } from "../../config";

export async function transaction(destinatario: string, valor: number, token: string) {

    const header = `Bearer ${token}`;

    const data = { destinatario, valor };

    const response = await api.post('/make-transaction', data,
        {
            headers: {
                'Authorization': header
            }
        }
    );

    return response.data;

};

export async function getTransactions(token: string) {

    const header = `Bearer ${token}`;

    const response = await api.get('/transaction',
        {
            headers: {
                'Authorization': header
            }
        }
    );

    return response.data;

};
