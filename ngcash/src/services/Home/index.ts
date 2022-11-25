import { useNavigate } from "react-router-dom";

import { api } from "../../config";

import { useAuth } from "../../contexts/useAuth";

import { IBalance } from "../../interfaces/IBalance";


export async function balanceRequest(token: string) {
    try {

        const request = await api.get('/balance', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (request.data.auth === false) {
            
        }

        return request.data

    } catch (error) {
        return error
    }
}
