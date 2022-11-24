import { Navigate } from "react-router-dom";

import { getUserLocalStorage } from "../../contexts/utils";

export const PrivateRoute = ({children}: {children: JSX.Element}) => {

    const user = getUserLocalStorage();

    if(!user){
        return alert("Você não está autenticado! Faça login para continuar"), <Navigate to="/login" />
    };

    if(!user.token){
        return alert("Você não está autenticado! Faça login para continuar"), <Navigate to="/login" />
    };

    return children

}
