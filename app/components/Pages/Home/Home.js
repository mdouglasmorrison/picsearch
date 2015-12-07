import React from 'react';
import {Link} from 'react-router';
import Search from '../../Search/Search';
import Results from '../../Results/Results';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureURL: '/img/default.png'
        };
        this.getNewImage = this.getNewImage.bind(this);
    }

    getNewImage(data, err){
        this.refs.setNew.setNewImage(data, err);
    }

    render() {
        return (
            <div className="Home">
                <Search getNewImage={this.getNewImage}/>
                <Results src={this.state.pictureURL} ref="setNew" />
            </div>
        );
    }
}

export default Home;