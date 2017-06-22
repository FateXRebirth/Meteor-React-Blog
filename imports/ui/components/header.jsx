import React from 'react';

//import { Container, Header, Button, Item } from 'semantic-ui-react';

import Navbar from './navbar';

export default class Header extends React.Component {
    render() {
        return (
            <div className="head">
            <div className="ui inverted vertical masthead center aligned segment">
                <Navbar />         
                <div className="ui text container">
                <h1 className="ui inverted header">
                    Imagine-a-Company
                </h1>
                <h2>Do whatever you want when you want to.</h2>
                <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
                </div>
            </div>      
            </div> 
        )
    }
}