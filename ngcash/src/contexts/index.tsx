
import React, { useEffect, useState, createContext } from "react";

import { IAuthProvider, IContext, IUser } from "./types";

import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {

        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        };

    }, []);

    const authenticate = async (username: string, password: string) => {

        const response = await loginRequest(username, password);

        const payload = { token: response.token, user: response.user };

        if(response.auth === false){
            return alert('Usuário ou senha inválidos!');
        };

        setUser(payload);

        setUserLocalStorage(payload);

    }

    function logout() {
        setUser(null);

        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
