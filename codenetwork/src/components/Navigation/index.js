import React, {Component} from 'react'
import MenuSide from '../MenuSide/index'
import Navbar from '../Navbar/index'

export default class Navigation extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <MenuSide />
            </div>
        )
    }
}