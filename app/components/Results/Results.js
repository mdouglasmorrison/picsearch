import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src,
            hasImage: false,
            serverError: false
        };
        this.setNewImage = this.setNewImage.bind(this);
    }

    setNewImage(url, err){
        if(err){
            this.setState({serverError: err});
        }else{
            this.setState({serverError: false});
        }

        this.setState({hasImage: true});
        this.setState({src: url});
    }

    render() {
        var resultClasses = classNames({
            'results': true,
            'hasImage': this.state.hasImage,
            'noImage': this.state.hasImage === false
        }),
        errorClass = classNames({
            'error': this.state.serverError !== false
        }),
        text = this.state.serverError ? this.state.serverError.responseText : 'Here\'s The Closest Match:';


        return (
            <div className={resultClasses}>
                <div className="container">
                    <h1 className={errorClass}>{text}</h1>
                    <img src={this.state.src} alt=""/>
                </div>
            </div>
        );
    }
}

export default Results;