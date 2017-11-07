import React, { Component } from 'react'
import './style.css';

export default class CardUser extends Component {
    render() {
        return (
            <section className='data-user'>
                <div className='grow-data'>
                    <i className='ic-profile'>user</i>
                    <span className='name-user'>Name</span>
                </div>

                <div>
                    <span className='ic-arrow'>arrow</span>
                </div>
            </section>
        )
    }
}