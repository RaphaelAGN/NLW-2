import React from 'react';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import logoImg from '../../assets/images/logo.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


function Login() {
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
                            name="email" 
                            label="" 
                            placeholder="E-mail"
                        />
                        <p></p>
                        <Input 
                            name="password" 
                            label=""
                            placeholder="Senha"
                        />

                        <Checkbox 
                            name="remember"
                            label="Lembre-me"
                        />
                        
                        <a>Esqueci minha senha</a>

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
                            <a>Cadastre-se</a>
                        </div>
                    </div>
                    
                </footer>
            </div>
        </div>
    )
}

export default Login;