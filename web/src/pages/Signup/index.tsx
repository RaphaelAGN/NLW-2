import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import {Link} from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg'

import './styles.css';

function Signup() {

    
    return (
        <div id="page-signup">   
            <div id="page-signup-leftside">
                <div id="back-icon">
                    <Link to="/" className="back-icon">
                        <img src={backIcon} alt="Voltar" />
                    </Link>  
                </div>
                <form onSubmit={handleCreateUser}>
                    <fieldset>
                        <div className="signup-titles">
                            <legend>Cadastro</legend>
                            
                            <a id="signup-text"> Preencha os dados abaixo <br/>
                                para começar.
                            </a>
                        </div>

                        <div className="signup-inputs">
                            <Input
                                className="inputs"
                                name="name" 
                                label="" 
                                placeholder="Nome"
                            />
                            <p></p>
                            <Input
                                className="inputs"
                                name="lastname" 
                                label="" 
                                placeholder="Sobrenome"
                            />
                            <p></p>
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

export default Signup;