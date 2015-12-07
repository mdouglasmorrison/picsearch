import React from 'react';
import {Link} from 'react-router';
import _ from 'underscore';
import classNames from 'classnames';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isValid: true,
            isClean: true,
            showSpinner: false
        };
        this.validateOnChange = _.debounce(this.validateOnChange,750).bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }


    handleSubmit(event) {
        var self = this;
        event.preventDefault();

        if(this.validateEmail(event.target[0].value)){
            $.ajax({
                url: '/api/search?email=' + event.target[0].value,
                beforeSend: function(){
                    self.setState({showSpinner: true});
                }
            })
            .done((data) => {
                    this.setState({isClean: false});
                    this.props.getNewImage(data, false);
                    this.setState({showSpinner: false});
            })
            .fail((response, message) => {
                    if(response.status === 404){
                        this.props.getNewImage('/img/default.png', response);
                    }else{
                        this.props.getNewImage('/img/obi.gif', response);
                    }
                    this.setState({isClean: false});
                    this.setState({showSpinner: false});
            });
        }else {
            this.setState({isValid: false});
        }
    }

    validateOnChange(event){
        this.setState({isValid: (event.target.value ? this.validateEmail(event.target.value) : true)});
    }

    validateEmail(input){
        var re;
        re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/i;

        return re.test(input);
    }

    render() {
        var inputClasses = classNames({
            'input-group': true,
            'valid': this.state.isValid,
            'invalid': this.state.isValid === false
        }),
        formClasses = classNames({
            'search': true,
            'clean': this.state.isClean,
            'dirty': this.state.isClean === false
        }),
        spinnerClasses = classNames({
            'spinner': true,
            'show': this.state.showSpinner,
            'hide': this.state.showSpinner === false
        });

        return(
            <div className={formClasses}>
                <div className='container'>
                    <form ref='searchForm' onSubmit={this.handleSubmit.bind(this)}>
                        <div className={inputClasses}>
                            <input type='text' className='form-control' placeholder="Enter Email!" onChange={this.validateOnChange.bind(this)} />
                            <span className='input-group-btn'>
                                <button className='btn btn-default' type="submit"><span className='glyphicon glyphicon-search'></span>Search</button>
                            </span>
                        </div>
                        {this.state.isValid ? null : <span className="invalid-text">Invalid Email Address</span> }
                    </form>
                </div>
                <div className={spinnerClasses}>
                    <img src="/img/yak-head.svg" alt=""/>
                </div>
            </div>
        );


    }
}

export default Search;