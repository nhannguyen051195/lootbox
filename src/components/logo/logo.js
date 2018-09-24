import Logo from '../../assets/logo/icons8.png';
import classes from './logo.css'
import React, { Component } from 'react';

class logo extends Component {
    render() {
        return (
            <div className={classes.Logo}>
            <img src={Logo}  alt="Logo" />
            </div>
        );
    }
}

export default logo;



