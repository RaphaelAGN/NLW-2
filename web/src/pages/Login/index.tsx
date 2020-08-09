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
                        <Input 
                            name="password" 
                            label=""
                            placeholder="Senha"
                        />

                        <div id="form-login-footer-buttons">
                            <Input name="remember" label="Lembrar-me" type="checkbox"/>
                            <span>Esqueci minha senha</span>
                        </div>

                        <button type="submit">Entrar</button>
                    
                    </fieldset>
                </form>

                <footer>
                    <p>
                        Não tem conta? <br/>
                        Cadastre-se
                    </p>
                    <span className="total-connections">
                        É de graça <img src={purpleHeartIcon} alt="" />
                        </span>
                </footer>
            </div>
        </div>
    )
}

export default Login;