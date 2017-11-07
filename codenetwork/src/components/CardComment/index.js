import React, { Component } from 'react';
import Comment from '../CommentsPost/index'
import Like from '../Like/index'
import './style.css'

export default class CardComment extends Component {
    render() {
        return (
            <section>
                <div>
                    <Like />
                </div>
                <div className='flex-dataUser'>
                    <i className='ic-profile'>Photo</i>
                    <div className='comments'>
                        <h3 className='name-user'>Name</h3>
                        <p contentEditable='true'>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='comment'>
                    <Comment />
                </div>
            </section>
        )
    }
}