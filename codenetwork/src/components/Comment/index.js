import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <section>
                <div className='content-ic-profile'>
                    <span>ic-profile</span>
                </div>
                <div className='data-comment'>
                    <input type='text' placeholder='Comentar' />
                </div>
            </section>
        )
    }
}