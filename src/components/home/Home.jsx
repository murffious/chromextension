import React, { Component } from 'react';
import Nav from '../../common/nav/Nav';
import Search from '../../molecules/Search';

import './home.scss';

export default class Home extends Component {

    navigate = (link) => {

        console.log('Link: ', link);
        return this.props.history.push(link);
    }


    render() {
        return(
            <div className="home">
                <Nav navigate = {this.navigate}/>
                <Search />
            </div>
        );
    }
}