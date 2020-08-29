import React, { useState } from 'react';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


import './styles.css';


function Login() {
    //const [passwordShown, setPasswordShown] = useState(false);

    /*function togglePasswordVisibility() {
        setPasswordShown(passwordShown ? false : true);
    }*/

    return (
        <div id="page-login">
            <div id="page-login-leftside">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de 
                        <br/>estudos online.</h2>
                </div>
            </div>

            <div id="page-login-rightside">
                <form>
                    <fieldset>
                        <legend>Fazer login</legend>

                        <Input
                            className="inputs"
                            name="email" 
                            label="" 
                            placeholder="E-mail"
                        />
                        <p></p>
                        <Input 
                            className="inputs"
                            name="password" 
                            label=""
                            placeholder="Senha"
                            type="password"
                        />

                        <Checkbox 
                            name="remember"
                            label="Lembre-me"
                        />
                        
                        <Link to="" id="forgot-pass">Esqueci minha senha</Link>

                        <button type="submit">Entrar</button> 
                    </fieldset>
                </form>

                <footer>
                    <div id="footer-signup">
                        <div id="footer-first-line">
                            <a>Não tem conta?</a>
                            <span>
                                É de graça <img src={purpleHeartIcon} alt="" />
                            </span>
                        </div>
                        <div id="footer-second-line">
                            <Link to="/signup-page" className="signup-page">Cadastre-se</Link>
                        </div>
                    </div>
                    
                </footer>
            </div>
        </div>
    )
}

export default Login;