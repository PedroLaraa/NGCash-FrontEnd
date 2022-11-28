import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { register } from '../../services/Register';

const Signup = () => {

    const [user, setUser] = useState("");

    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const registerNewUser = async () => {

        try {

            const response = await register(user, senha);
            
            if(response.sucess === false){
                return alert(response.message);
            };

            alert("User criado com sucesso!");

            return navigate('/login');

        } catch(err) {
            return alert(`Erro: ${err}`);
        };
    };

    return(
        <div className='body-Login d-flex justify-content-center'>
            <div className='formLogin p-4'>
                <form autoComplete='false'>
                <section className='containerForm'>
                        <h3>💸NGCash | Register BankAccount</h3>
                        <div className='p-2'>
                            <label>	• Usuário:</label>
                            <input
                                type="text"
                                className='form-control'
                                required={true}
                                onChange={(e) => setUser(e.target.value)}
                                minLength={3}
                                maxLength={12}
                            />
                        </div>
                        <div className='p-2'>
                            <label>	• Senha:</label>
                            <input
                                type="password"
                                className='form-control'
                                required={true}
                                onChange={(e) => setSenha(e.target.value)}
                                minLength={8}
                                maxLength={14}
                            />
                        </div>
                        <div className='d-flex justify-content-around pt-2'>
                            <button onClick={(e) => {
                                e.preventDefault()
                                registerNewUser()
                                }} className='btn btn-outline-dark'>Registrar-se</button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Signup;
