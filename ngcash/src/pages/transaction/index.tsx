import React, { useState, useEffect } from 'react';

import { getUserLocalStorage } from '../../contexts/utils';

import { IBalance } from '../../interfaces/IBalance';

import { ILoggedUser } from '../../interfaces/ILoggedUser';

import { IResponse } from '../../interfaces/IResponse';

import { balanceRequest } from '../../services/Home';

import Logout from '../../services/logout';

import { transaction } from '../../services/transaction';

import './transactionStyle.css';

const Transaction = () => {

    const [userAccount, setUserAccount] = useState<ILoggedUser | null>();

    const [balance, setBalance] = useState<IBalance | null>();

    const [destinatario, setDestinatario] = useState('');

    const [valor, setValor] = useState('');

    useEffect(() => {

        const user = getUserLocalStorage();

        setUserAccount(user.user);

        if (user.token) {
            balanceRequest(user.token).then((v) => {
                setBalance(v);
            });
        };

    }, []);

    const transferirDinheiro = async () => {

        const user = getUserLocalStorage();

        const response: IResponse = await transaction(destinatario, parseInt(valor), user.token);

        console.log(response)

        if (response.sucess === false) {
            return alert(response.message);
        };

        return alert("Transação realizada com sucesso!");

    };

    return (
        <div className='container-home'>
            <div className='row justify-content-md-center vw-100 m-0'>
                <div className='background-sup col-12 d-flex justify-content-center'>
                    <a href='/home'>.</a>
                    <p>Olá, <>{userAccount?.username}</>!</p>
                    <>
                        <Logout />
                    </>
                </div>
                <div className='formLogin col-6 mt-4 p-4'>
                    <form autoComplete='false'>
                        <section className='containerForm'>
                            <h3>💸NGCash | Transferir</h3>
                            <div className='p-2'>
                                <label>	• Destinatário (Username):</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    required={true}
                                    onChange={(e) => setDestinatario(e.target.value)}
                                />
                            </div>
                            <div className='p-2'>
                                <label>	• Quantia:</label>
                                <input
                                    type="number"
                                    className='form-control'
                                    required={true}
                                    onChange={(e) => setValor(e.target.value)}
                                />
                            </div>
                            <div className='d-flex justify-content-around pt-2'>
                                <button onClick={(e) => { 
                                    e.preventDefault()
                                    transferirDinheiro() 
                                    }} className='btn btn-outline-dark'>Transferir</button>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default Transaction
