import React, { Component } from 'react'
import Search from '../Search/index'
import './style.css'


export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='content-nav-left'>
                    <span className='logo'>Code Network</span>
                    <Search />

                </div>
               <div className='content-nav-right'>
                    <span className='photo-profile'>#</span>
                    <span className='icon-notifications'>Notifications</span>
               </div>
            </nav>
        )
    }
}