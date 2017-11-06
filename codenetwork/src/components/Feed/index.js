import React, { Component } from 'react';
import Navbar from '../Navbar/index'
import MenuSide from '../MenuSide/index'
import './style.css'
import Publish from '../Publish/index'

const Feed = () => (
    <div>
        <Navbar />
        <div className='content-flex'>
            <MenuSide />
            <div className="publish-content">
                <Publish />
            </div>
        </div>
    </div>

)

export default Feed;