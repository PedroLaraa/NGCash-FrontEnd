import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';

import Login from './pages/login';

import { AuthProvider } from './contexts';

import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import Transaction from "./pages/transaction";
import Signup from "./pages/signup";

const Rotas = () => {

    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} ></Route>
                        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} ></Route>
                        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} ></Route>
                        <Route path="/transaction" element={<PrivateRoute><Transaction /></PrivateRoute>} ></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )

}

export default Rotas;
