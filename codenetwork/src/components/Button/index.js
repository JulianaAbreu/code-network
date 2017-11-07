import React, {Component} from 'react'
import './style.css'

export default class Button extends Component {
    render(){
        return(
            <div className='like-post'>
                <button className='btn-like red'><i>#</i></button>
            </div>
        )
    }
}