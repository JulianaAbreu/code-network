import React, {Component} from 'react'
import './style.css'
import Button from '../Button/index'

export default class Like extends Component {
    render(){
        return(
            <div className='like'>
                <Button />
                <span className='number-likes'>123</span>
                
            </div>
        )
    }
}