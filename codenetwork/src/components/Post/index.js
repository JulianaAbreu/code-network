import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <section>
                <div>
                    <span>#</span>
                    <span>Nome do usuário</span>
                </div>
                <div className='publication-text'>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className='content-like'>
                        <span className='ic-like'></span>
                    </div>
                </div>

                
                <div>
                    <div>
                        <span>Icon</span>
                    </div>
                    <h3>Nome do usuário</h3>
                    <p>Lorem Ipsum dolor sit amet, consectetur</p>
                </div>
                
            </section>
        )
    }
}