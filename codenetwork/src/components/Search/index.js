import React, {Component} from 'react'
import './style.css'


export default class Search extends Component {
    render () {
        return (
            <form className='form-search'>
                <input type='search' className='input-search' placeholder='Pesquisar...'/>
                <span className='icon-search'>icon</span>
            </form>
        )
    }
}