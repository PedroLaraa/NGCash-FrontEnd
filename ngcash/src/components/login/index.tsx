import React, { useState } from 'react'

import './loginStyle.css'

import { useAuth } from '../../contexts/useAuth';

const Login: React.FC = () => {

    const [user, setUser] = useState("");

    const [senha, setSenha] = useState("");

    const { authenticate } = useAuth();

    async function handleSubmit(user: string, senha: string) {
        try {

            await authenticate(user, senha);

            console.log("Dados: ", user, senha);

        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div className='body-Login d-flex justify-content-center vh-10'>
            <div className='formLogin p-4'>
                <form className=''>
                    <section className='containerForm'>
                        <h3>💸NGCash | BankAccount</h3>
                        <div className='p-2'>
                            <label>	• Usuário:</label>
                            <input
                                type="text"
                                className='form-control'
                                required={true}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className='p-2'>
                            <label>	• Senha:</label>
                            <input
                                type="password"
                                className='form-control'
                                required={true}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className='d-flex justify-content-around pt-2'>
                            <button
                                className='btn btn-outline-dark'
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleSubmit(user, senha)
                                }}
                            >Login</button>
                            <button className='btn btn-outline-dark'>Registrar-se</button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );

};

export default Login;
