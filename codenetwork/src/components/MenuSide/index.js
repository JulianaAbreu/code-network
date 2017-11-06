import React, {Component} from 'react'
import './style.css'

export default class MenuSide extends Component {
    render() {
        return(
            <aside className='content-sidemenu'>
                <ul className='list-sidemenu'>
                    <li>Feed</li>
                    <li>Perfil</li>
                    <li>Amigos</li>
                    <li>Grupos</li>
                </ul>
            </aside>
        )
    }
}