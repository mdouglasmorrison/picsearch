import React from 'react';
import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

class App extends React.Component {
    render() {
        return (
            <div className='appContainer'>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;