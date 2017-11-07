import React, { Component } from 'react'
import './style.css'
import EditData from './EditData'
import EditCredentials from './EditCredentials'

export default class EditProfile extends Component {
    render() {
        return (
            <section>
                <h2 className='header-editfields'>Editar Perfil</h2>
                <EditData />
                <EditCredentials />
            </section>
        )
    }
}