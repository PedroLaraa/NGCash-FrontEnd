import React, { FC, useState, useEffect } from 'react'

import { ITransactionProps } from '../../../interfaces/ITransactionProps';

const ListTransaction: FC<ITransactionProps> = (props): JSX.Element => {

    const [filter, setFilter] = useState(false)

    const [typeFilter, setTypeFilter] = useState('')

    const transactions = props.transactions

    return(
        <>
        <div className='d-flex justify-content-around'>
            <button className='btn btn-dark m-2'>Saída</button>
            <button className='btn btn-dark m-2'>Todas</button>
            <button className='btn btn-dark m-2'>Entrada</button>
        </div>
            {filter === false && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='col'>Destino</th>
                            <th className='col'></th>
                            <th className='col'></th>
                        </tr>
                    </thead>
                    {transactions?.map((v, i) => (
                        <div key={i} className='d-flex justify-content-around'>
                            
                        </div>
                    ))}
                </table>
            )}
        </>
    )

};

export default ListTransaction;
