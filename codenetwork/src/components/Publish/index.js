import React, { Component } from 'react';
import './style.css'


export default class Publish extends Component {
    render() {
        return (
            <section className='content-publish'>
                <div className='flex-publish'>
                    <form className='form-newpublish'>
                        <textarea cols='120' rows='10' className='field-publish'></textarea>
                        <button className='btn-post'>Postar</button>
                    </form>
                </div>
            </section>
        )
    }
}