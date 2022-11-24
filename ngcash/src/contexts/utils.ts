import { api } from "../config";

import { IUser } from "./types";


export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("user");

    if (!json) {
        return null;
    } else {
        const user = JSON.parse(json);

        return user ?? null;
    }
}

export async function loginRequest(username: string, password: string) {
    try {

        const request = await api.post("/login", {
            username,
            password,
        });

        return request.data;

    } catch (error) {
        return null;
    }
}