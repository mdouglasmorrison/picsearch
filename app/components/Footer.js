import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <p>© 2015 Matt Morrison.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;