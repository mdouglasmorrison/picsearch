import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('bs');
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><img src="/img/logo.png" alt=""/></a>
                        </div>
                        <div id="navbar" className="pull-right">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;