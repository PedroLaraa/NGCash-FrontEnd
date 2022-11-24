
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
    
    return(
        <button 
        className='btn btn-dark' 
        onClick={() => logoutUser()}
        >Logout
        </button>
    )

}

export default Logout;
