import React from 'react';
import {Link} from 'react-router';
import HeaderStore from '../stores/HeaderStore';
import HeaderActions from '../actions/HeaderActions';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = HeaderStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HeaderStore.listen(this.onChange);
    }

    componentWillUnmount() {
        HeaderStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();


        let searchQuery = this.state.searchQuery.trim();

        if (searchQuery) {
            HeaderActions.findPerson({
                query: searchQuery
            });
        }
    }

    render() {
        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link to='/' className='navbar-brand'>
                        PicSearch
                    </Link>
                </div>
                <div id='navbar' className='navbar-collapse collapse'>
                    <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='enter email' value={this.state.searchQuery} onChange={HeaderActions.updateSearchQuery} />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
                        </div>
                    </form>
                    <ul className='nav navbar-nav pull-right'>
                        <li><Link to='/about'>About Matt</Link></li>
                        <li><Link to='/contact'>Contact Matt</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;