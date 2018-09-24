import React, { Component } from 'react';
import classes from './lootbox.css';
import gift from '../../assets/logo/gift.png';
import Navbar from '../NavBar/NavBar';
//import LootboxModal from './LootboxModal/LootboxModal';

class lootbox extends Component {
    state = {
        showCoupon1: false,

    }
    showCoupon1 = () => {
        this.setState({ showCoupon1: true })
    }
    closeCoupon1 = () => {
        this.setState({ showCoupon1: false })
    }
    render() {
        return (
            <div>
            <Navbar />
            <br></br>
                <div className={classes.flipBox}>
                    <div className={classes.flipboxInner}>
                        <div className={classes.flipboxFront} >
                            <img src={gift} alt="5 Terre" />
                            <div className={classes.container}>
                                <p>Up to 40% off during September</p>
                            </div>
                        </div>
                        <div className={classes.flipboxBack}>
                            <h2><i className="fas fa-heart" style={{'color':'red'}}></i> Congratulations!</h2>
                            <div className={classes.content}>               
                            <p><span className={classes.span}>50% Off</span> Save up to 50% off hundreds of things to do near you!</p>   
                            <button className={classes.button}>Get Deal!</button>
            
                            </div>
                        </div>
                    </div>

                </div>

                <div className={classes.flipBox}>
                    <div className={classes.flipboxInner}>
                        <div className={classes.flipboxFront} >
                            <img src={gift} alt="5 Terre" />
                            <div className={classes.container}>
                                <p>Up to 40% off during September</p>
                            </div>
                        </div>
                        <div className={classes.flipboxBack}>
                            <h2><i className="fas fa-heart" style={{'color':'red'}}></i> Congratulations!</h2>
                            <div className={classes.content}>               
                            <p><span className={classes.span}>50% Off</span> Save up to 50% off hundreds of things to do near you!</p>   
                            <button className={classes.button}>Get Deal!</button>
            
                            </div>
                            <div className={classes.content}>               
                            <p><span className={classes.span}>50% Off</span> Save up to 50% off hundreds of things to do near you!</p>   
                            <button className={classes.button}>Get Deal!</button>
            
                            </div>
                        </div>
                    </div>

                </div>


                <div className={classes.flipBox}>
                    <div className={classes.flipboxInner}>
                        <div className={classes.flipboxFront} >
                            <img src={gift} alt="5 Terre" />
                            <div className={classes.container}>
                                <p>Up to 40% off during September </p>
                            </div>
                        </div>
                        <div className={classes.flipboxBack}>
                        <h2><i className="fas fa-heart" style={{'color':'red'}}></i> Congratulations!</h2>
                            <div className={classes.content}>               
                            <p><span className={classes.span}>50% Off</span> Save up to 50% off hundreds of things to do near you!</p>   
                            <button className={classes.button}>Get Deal!</button>
            
                            </div>
                            <div className={classes.content}>               
                            <p><span className={classes.span}>70% Off</span> Save up to 70% off hundreds of things to do near you!</p>   
                            <button className={classes.button}>Get Deal!</button>
            
                            </div><div className={classes.content}>               
                            <p><span className={classes.span}>20% Off</span> Save up to 20% off hundreds of things to do near you!</p>   
                            <button className={classes.button}>Get Deal!</button>
            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default lootbox;