import React, {useState, FormEvent} from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg'

import './styles.css';

function ForgotPassword() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleForgotPassword(e: FormEvent) {
        e.preventDefault();
    }
    return (
        <div id="page-forgot-password">   
            <div id="page-forgot-password-leftside">
                <div id="back-icon">
                    <Link to="/" className="back-icon">
                        <img src={backIcon} alt="Voltar" />
                    </Link>  
                </div>
                <form onSubmit={handleForgotPassword}>
                    <fieldset>
                        <div className="signup-titles">
                            <legend>Eita, esqueceu sua senha?</legend>
                            
                            <a id="signup-text"> Não esquenta, vamos dar um jeito nisso. </a>
                        </div>

                        <div className="signup-inputs">
                            <Input
                                className="inputs"
                                name="name" 
                                label="" 
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <p></p>
                            <Input
                                className="inputs"
                                name="lastname" 
                                label="" 
                                placeholder="Sobrenome"
                                value={lastName}
                                onChange={(e) => { setLastName(e.target.value) }}
                            />
                            <p></p>
                            <Input
                                className="inputs"
                                name="email" 
                                label="" 
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <p></p>
                            <Input 
                                className="inputs"
                                name="password" 
                                label=""
                                placeholder="Senha"
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>

                        <button type="submit">Concluir cadastro</button> 
                    </fieldset>
                </form>
            </div>

            <div id="page-signup-rightside">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de 
                        <br/>estudos online.</h2>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;