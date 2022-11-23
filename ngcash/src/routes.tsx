import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';

import Login from './pages/login';

import { AuthProvider } from './contexts';

import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

const Rotas = () => {

    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} ></Route>
                        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} ></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )

}

export default Rotas;
