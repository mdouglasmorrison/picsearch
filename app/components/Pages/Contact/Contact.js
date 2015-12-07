import React from 'react';
import {Link} from 'react-router';


class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <div className='container'>
                    <h1>Contact Matt</h1>
                    <h3><strong>Phone:</strong> (404)444-6202</h3>
                    <h3><strong>Email:</strong> mdouglasmorrison@gmail.com</h3>
                    <h3><a href="https://github.com/mdouglasmorrison" target="_blank">GitHub</a></h3>
                    <h3><a href="https://www.linkedin.com/in/mattlanta" target="_blank">LinkedIn</a></h3>
                    <h3><a href="https://twitter.com/MD_Morrison" target="_blank">Twitter</a></h3>
                </div>
            </div>
        );
    }
}

export default Contact;