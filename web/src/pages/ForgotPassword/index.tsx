import React, {useState, FormEvent} from 'react';
import Input from '../../components/Input';

import api from '../../services/api';

import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg'

import './styles.css';

function ForgotPassword() {
    //const history = useHistory();

    const [email, setEmail] = useState('');
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
                        <div className="forgot-password-titles">
                            <legend>Eita, esqueceu sua senha?</legend>
                            
                            <a id="forgot-password-text"> Não esquenta, vamos dar um jeito nisso. </a>
                        </div>

                        <div className="forgot-password-input">
                            <Input
                                className="inputs"
                                name="email" 
                                label="" 
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>

                        <button type="submit">Enviar</button> 
                    </fieldset>
                </form>
            </div>

            <div id="page-forgot-password-rightside">
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