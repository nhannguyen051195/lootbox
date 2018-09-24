import React, { Component } from 'react';
import classes from './NavBar.css';
import {NavLink} from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div className={classes.scrollmenu}>
                   <NavLink activeClassName={classes.active} to='/coupon'>  <i className="fas fa-money-check-alt"></i> Coupons</NavLink>
                    <NavLink activeClassName={classes.active} to='/loot-box'><i className="fas fa-gift"></i> Lootboxes</NavLink>
                    <NavLink activeClassName={classes.active} to='/store'>  <i className="fas fa-store"></i> Store </NavLink>
                    <NavLink activeClassName={classes.active} to='/profile'> <i className="fas fa-user"></i> Profile</NavLink>

            </div>
        );
    }
}

export default NavBar;