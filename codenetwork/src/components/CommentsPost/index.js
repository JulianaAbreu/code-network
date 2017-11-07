import React, { Component } from 'react'
import './style.css'

export default class CommentsPost extends Component {
    render() {
        return (
            <section className='data-comment'>
               
                <div className='data'>
                    <i className='icon-profile'>Photo</i>
                    <input type='text' placeholder='Comentar' className='comments-input' />
                </div>
            </section>
        )
    }
}