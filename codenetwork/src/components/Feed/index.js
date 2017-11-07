import React, { Component } from 'react';
import Navbar from '../Navbar/index'
import MenuSide from '../MenuSide/index'
import './style.css'
import Publish from '../Publish/index'
import Post from '../Post/index'
import EditProfile from '../Profile/index'


const Feed = () => (
    <div>
        <Navbar />
        <div className='content-flex'>
            <MenuSide />
            <section className='content-feed'>
                <EditProfile />
               {/*  <div className="publish-content">
                    <Publish />
                </div>
                <div className="publication">
                    <Post />
                </div> */}
            </section>
        </div>
    </div>

)

export default Feed;