import {BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';

const Rotas = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/home" element={<Home />} ></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Rotas;
