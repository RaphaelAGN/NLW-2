import React from 'react';
import Input from '../../components/Input';

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
                    
                    </fieldset>

                    <div id="form-login-footer-buttons">              
                        <label htmlFor="rememberMe">Lembre-me</label>
                        <input name="remember" id="rememberMe" type="checkbox"/>
                        <a>Esqueci minha senha</a>
                    </div>

                    <button type="submit">Entrar</button>
                </form>

                <footer>
                    <div id="footer-signup">
                        <span>
                            Não tem conta? 
                        </span>
                        <a>
                            Cadastre-se
                        </a>
                    </div>
                    <span className="total-connections">
                        É de graça <img src={purpleHeartIcon} alt="" />
                    </span>
                </footer>
            </div>
        </div>
    )
}

export default Login;