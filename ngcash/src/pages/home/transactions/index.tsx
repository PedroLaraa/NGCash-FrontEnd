import React, { FC, useState, useEffect } from 'react';

import { getUserLocalStorage } from '../../../contexts/utils';

import { ITransactionProps } from '../../../interfaces/ITransactionProps';

import './transactionsStyle.css';

const ListTransaction: FC<ITransactionProps> = (props): JSX.Element => {

    const [filter, setFilter] = useState('Todas');

    const [idUser, setIdUser] = useState();

    const transactions = props.transactions;

    useEffect(() => {

        const user = getUserLocalStorage();

        if (user.user) {
            setIdUser(user.user.accountId);
        };

    }, []);

    const transactionsRecebidas = transactions?.filter(v => (v.creditedAccountId.id) === idUser);

    const transactionsFeitas = transactions?.filter(v => (v.debitedAccountId.id) === idUser);

    return (
        <>
            <div className='container-transactions'>
                <div className='d-flex justify-content-center mb-5 '>
                    <h1>Transferências</h1>
                </div>
                <div className='d-flex justify-content-around'>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setFilter('Saida')
                    }}
                        value='Saida'
                        className={filter === 'Saida' ? `btn btn-success m-2` : `btn btn-secondary m-2`}>Saída</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setFilter('Todas')
                    }}
                        value='Todas'
                        className={filter === 'Todas' ? `btn btn-success m-2` : `btn btn-secondary m-2`}>Todas</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setFilter('Entrada')
                    }}
                        value='Entrada'
                        className={filter === 'Entrada' ? `btn btn-success m-2` : `btn btn-secondary m-2`}>Entrada</button>
                </div>
                {filter === 'Todas' ?
                    <table className='table mt-5 table-striped table-secondary'>
                        <thead>
                            <tr>
                                <th scope='col'>Valor</th>
                                <th scope='col'>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((v, i) => (
                                <>
                                    <tr>
                                        <>
                                            {v.creditedAccountId.id === idUser ?
                                                <td>+ {v.value}</td> :
                                                <td>- {v.value}</td>}
                                        </>
                                        <td>{(v.created_at).split('-').join('/').split("T").join(' - ').split('.').shift()}</td>
                                    </tr>
                                </>
                            )).reverse()}
                        </tbody>
                    </table>
                    : filter === 'Saida' ?
                        <table className='table mt-5 table-striped table-secondary'>
                            <thead>
                                <tr>
                                    <th scope='col'>Valor</th>
                                    <th scope='col'>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactionsFeitas?.map((v, i) => (
                                    <>
                                        <tr>
                                            <td>- {v.value}</td>
                                            <td>{(v.created_at).split('-').join('/').split("T").join(' - ').split('.').shift()}</td>
                                        </tr>
                                    </>
                                )).reverse()}
                            </tbody>
                        </table>
                        : filter === 'Entrada' && (
                            <table className='table mt-5 table-striped table-secondary'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Valor</th>
                                        <th scope='col'>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactionsRecebidas?.map((v, i) => (
                                        <>
                                            <tr>
                                                <td>+ {v.value}</td>
                                                <td>{(v.created_at).split('-').join('/').split("T").join(' - ').split('.').shift()}</td>
                                            </tr>
                                        </>
                                    )).reverse()}
                                </tbody>
                            </table>
                        )}
            </div>
        </>
    );
};

export default ListTransaction;
