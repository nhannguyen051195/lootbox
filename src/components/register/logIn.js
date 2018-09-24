import React, { Component } from 'react';
import classes from './logIn.css'
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';


class logIn extends Component {
    render() {
        return (
            <div>
                <div className={classes.text}>Lootbox</div>
                <div className={classes.Logo} >
                <Logo/>
                </div>
                <div className={classes.form}>
                <form >
                    <div className={classes.row}>
                        <div className={classes.col25}>
                            <label htmlFor="fname"><i class="fas fa-user"></i> Username </label>
                        </div>
                        <div className={classes.col75}>
                            <input className={classes.input} type="text" id="fname" name="firstname" placeholder="Username..." />
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.col25}>
                            <label htmlFor="lname"><i class="fas fa-key"></i> Password </label>
                        </div>
                        <div className={classes.col75}>
                            <input className={classes.input} type="password" id="lname" name="lastname" placeholder="Password..." />
                        </div>
                    </div>

                    <Link to='/coupon'><button className={classes.button}>Sign in</button></Link>



                </form>
                </div>
                <div className={classes.form}>
                    <p>Haven't got an account?</p>
                    <Link to='/sign-up'> <button  className={classes.button1}>Sign Up</button></Link>

                </div>
            </div>
        );
    }
}

export default logIn;