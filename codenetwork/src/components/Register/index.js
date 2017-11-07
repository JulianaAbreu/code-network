import React, { Component } from 'react'
import './style.css'

export default class RegisterUser extends Component {


    render() {
        return (
            <div className='content-page-login'>
                <section className='content-login'>
                    <header className='header-login'>
                        <p>Realizar cadastro</p>
                    </header>
                    <div className='flex-login'>
                        <div className="content-logo">
                            <span className='logo'>Code Network</span>
                        </div>
                        <div>
                            <form className='content-form'>
                                <input type='text' name='nome' placeholder="Email" className='input-nome' />
                                <input type='text' placeholder='Sobrenome' name='sobrenome' className='input-sobrenome' />
                                <input type='email' placeholder='Email' name='email' className='input-email' />
                                <input type='password' placeholder='Senha' name='password' className='input-pass' />
                                <input type='password' placeholder='Repetir a senha' name='password' className='input-pass' />

                                <button className='btn-login'>Confirmar</button>
                            </form>
                           
                        </div>
                        <a href='../Login/'>Voltar</a>

                    </div>

                </section>
            </div>
        )
    }
}