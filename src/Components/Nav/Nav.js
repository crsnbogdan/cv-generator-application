import React, { Component } from 'react';
import './Nav.css'
class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
                <div className="nav--container">
                    <h1>CV Generator</h1>
                    <p>Currently {this.props.mode}</p>
                </div>
        );
    }
}
 
export default Nav;