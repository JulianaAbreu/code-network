import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/index'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Feed from './components/Feed/index'
import Register from './components/Register/index'
import Publish from './components/Publish/index'
import Navigation from './components/Navigation/index'
import Post from './components/Post/index'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route component={Feed} path='/Feed'/>
            <Route component={Register} path='/Register'/>
            {/* <Route path='/' component={App} /> */}
            <Route component={Post} path='/post' />
        </Switch>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
