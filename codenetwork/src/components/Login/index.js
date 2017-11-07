import React, { Component } from 'react';
import './style.css'
import { Redirect } from 'react-router';

export default class Login extends Component {
constructor(){
    super();

}

    render() {     
        return (
            <div className='content-page-login'>
                <section className='content-login'>
                    <header className='header-login'>
                        <p>Acessar minha conta</p>
                    </header>
                    <div className='flex-login'>
                        <div className="content-logo">
                            <span className='logo'>Code Network</span>
                        </div>
                        <div>
                            <form className='content-form'>
                                <input type='text' name='email' placeholder="Email" className='input-email' />
                                <input type='password' placeholder='Password' name='password' className='input-pass' />
                                <button className='btn-login'>Enter</button>
                            </form>
                            <div className='create-account'>
                                <a href='../Register/' onClick={this.handleOnCLickRegister}><p>Criar conta</p></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}