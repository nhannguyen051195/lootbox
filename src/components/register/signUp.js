import React, { Component } from 'react';
import classes from './signup.css'
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';



class signUp extends Component {
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
                            <label htmlFor="fname"><i class="fas fa-user-plus"></i> Username </label>
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
                    <div className={classes.row}>
                        <div className={classes.col25}>
                            <label htmlFor="fname"> <i class="fas fa-envelope"></i> Email:</label>
                        </div>
                        <div className={classes.col75}>
                       <input className={classes.input} type="email" id="fname" name="firstname" placeholder="Email..." />
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.col25}>
                            <label htmlFor="fname"><i class="fas fa-phone"></i> Phone number</label>
                        </div>
                        <div className={classes.col75}>
                            <input className={classes.input} type="number" id="fname" name="firstname" placeholder="Phone..." />
                        </div>
                    </div>

                    <Link to='/loot-box'><button className={classes.button}>Register</button></Link>



                </form>
                </div>
                
            </div>
    );
  }
}

export default signUp;