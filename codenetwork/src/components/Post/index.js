import React, { Component } from 'react';
import CardUser from '../CardUser/index';
import Like from '../Like/index'
import CardComment from '../CardComment/index'
import CommentsPost from '../CommentsPost/index'
import './style.css'

export default class Post extends Component {
    render() {
        return (
            <section className='content-publication'>
                <div className='publication'>
                    <div>
                        <CardUser />
                    </div>
                    <div className='post-card' contentEditable='true'>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='content-comments'>
                        <CardComment />
                    </div>
                </div>
            </section>
        )
    }
}