import React, {useState, useEffect} from 'react';

import './homeStyle.css';

import { balanceRequest } from '../../services/Home';

import { getUserLocalStorage } from '../../contexts/utils';

import { IBalance } from '../../interfaces/IBalance';

import { ILoggedUser } from '../../interfaces/ILoggedUser';

import { useAuth } from '../../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [balance, setBalance] = useState<IBalance | null>();

    const [userAccount, setUserAccount] = useState<ILoggedUser | null>();

    const { logout } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {

        const user = getUserLocalStorage();

        setUserAccount(user.user);

        if(user.token){
            balanceRequest(user.token).then((v) => {
                setBalance(v);
            });
        };

    }, []);

    const logoutUser = () => {

        logout();

        navigate('/login');
    };

    return(
        <div className='container-home'>
            <div className='row justify-content-md-center vw-100 m-0'>
                <div className='background-sup col-12 d-flex justify-content-center'>
                    <a href='/home'>.</a>
                    <p>Olá, <>{userAccount?.username}</>!</p>
                    <button className='btn btn-dark' onClick={() => logoutUser()}>Logout</button>
                </div>
            </div>
            <div className='row justify-content-around vw-100 mt-4 '>
                <div className='col-4 mt-4'>
                    <section className='saldo-box d-flex justify-content-end'>
                        <div className='pt-4'>
                            <p className='m-3'>Conta:</p>
                            <p className='m-3'>R$ <>{balance?.balance}</></p>
                        </div>
                    </section>
                </div>
                <div className='col-4 mt-4'>
                    <section className='operation-box d-flex justify-content-start'>
                        <div>
                            <a href='/transaction'>
                                <img className='m-3' src="https://cdn-icons-png.flaticon.com/512/876/876784.png" alt="Transferência" />
                            </a>
                            <p className=''>Transferir</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;