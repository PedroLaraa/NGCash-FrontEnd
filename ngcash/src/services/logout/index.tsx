
import React from 'react'

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/useAuth';

const Logout = () => {

    const { logout } = useAuth();

    const navigate = useNavigate();

    const logoutUser = () => {

        logout();

        navigate('/login');
    };

    const goHome = () => {

        navigate('/home');

    };

    return (
        <>
            <button
                className='btn btn-dark'
                onClick={() => logoutUser()}
            >Logout
            </button>
            <button className='btn btn-dark m-4' onClick={() => goHome()}>Home</button>
        </>
    )

}

export default Logout;
