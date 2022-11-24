import { api } from "../../config";

export async function register(user: string, password: string) {

    const response = await api.post('/user', {
        username: user,
        password: password
    });

    console.log(response)

    return response.data

}
