import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/index'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//import Navbar from './components/Navbar/index'
import Feed from './components/Feed/index'
import MenuSide from './components/MenuSide/index'
import Register from './components/Register/index'
import Publish from './components/Publish/index'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/login' component={Feed} />
            <Route component={Feed} path='/feed'/>
           
            {/* <Route path='/' component={App} /> */}

        </Switch>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
