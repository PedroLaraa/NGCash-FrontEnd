export interface IUser {
    user?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (user: string, senha: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}