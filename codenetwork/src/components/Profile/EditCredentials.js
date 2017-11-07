import React, { Component } from 'react'
import './style.css'

export default class EditCredentials extends Component {
    render() {
        return (
            <section className='content-editPass'>
                <h3>Editar senha </h3>
                <form className='form-update'>
                    <div>
                        <input placeholder='Nova Senha' className='input-nome' />
                        <input placeholder='Repetir nova senha' className='input-sobrenome' />
                    </div>
                    <div className='content-'>
                        <input placeholder='Senha Atual' className='pass'/>
                        <button className='btn-update'>Alterar</button>
                    </div>
                </form>
            </section>

        )
    }
}