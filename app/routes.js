import React from 'react';
import {Route} from 'react-router';
import App from './components/App/App';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Route>
);