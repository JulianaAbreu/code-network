import React, { Component } from 'react'
import './style.css'
import Login from '../Login/index'
import Post from '../Post/index'

export default class MenuSide extends Component {
    render() {
        return (

            <aside className='content-sidemenu'>
                <ul className='list-sidemenu'>
                    <li><a href='../Post/'>Feed</a></li>
                    <li><a href='../Login/'>Perfil</a></li>
                    <li><a href=''>Amigos</a></li>
                    <li><a href='#'>Grupos</a></li>
                </ul>
            </aside>
        )
    }
}