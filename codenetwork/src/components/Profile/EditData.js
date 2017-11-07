import React, { Component } from 'react'
import './style.css'


export default class EditData extends Component {
    render() {
        return (
            <section className='content-edit'>
                <h3>Editar dados</h3>
                <form className='form-update'>
                    <div className='inputs-dataUser'>
                        <input placeholder='Nome' className='input-nome' />
                        <input placeholder='Sobrenome' className='input-sobrenome' />
                    </div>
                    <div className='content'>
                        <input placeholder='nome@email.com' className='input-email'/>
                        <button className='btn-salvar'>Salvar</button>
                    </div>
                </form>
            </section>

        )
    }
}