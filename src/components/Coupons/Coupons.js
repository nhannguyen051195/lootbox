import React, { Component } from 'react';
import Navbar from '../NavBar/NavBar'
import classes from './coupons.css';
import coupon1 from '../../assets/logo/coupon-1.jpg';
import coupon2 from '../../assets/logo/Coupon-2.png';
import coupon3 from '../../assets/logo/coupon-3.jpg';
import coupon4 from '../../assets/logo/Coupon-4.jpg';
import Modal1 from '../UI/Modal/Modal1';
import Modal2 from '../UI/Modal/Modal2';
import Modal3 from '../UI/Modal/Modal3';
import Modal4 from '../UI/Modal/Modal4';




class Coupons extends Component {
    state = {
        showCoupon1: false,
        showCoupon2: false,
        showCoupon3: false,
        showCoupon4: false,

    }
    showCoupon1 = () => {
        this.setState({ showCoupon1: true })
    }
    closeCoupon1 = () => {
        this.setState({ showCoupon1: false })
    }


    showCoupon2 = () => {
        this.setState({ showCoupon2: true })
    }
    closeCoupon2 = () => {
        this.setState({ showCoupon2: false })
    }


     showCoupon3 = () => {
        this.setState({ showCoupon3: true })
    }
    closeCoupon3 = () => {
        this.setState({ showCoupon3: false })
    } 


     showCoupon4 = () => {
        this.setState({ showCoupon4: true })
    }
    closeCoupon4 = () => {
        this.setState({ showCoupon4: false })
    }

    render() {
        return (
            <div>
                <Navbar />
                <br></br>


                <Modal1 showCoupon1={this.state.showCoupon1} >

                    <div className={classes.IMG}>
                        <img src={coupon1} alt="5 Terre" />
                        <span onClick={this.closeCoupon1} className={classes.span}
                        ><i className="far fa-times-circle"></i></span>
                    </div>
                </Modal1>

                <div className={classes.polaroid} onClick={this.showCoupon1} >
                    <img src={coupon1} alt="5 Terre" />
                    <div className={classes.container}>
                        <p>Up to 40% off during September</p>
                    </div>
                </div>




                <Modal2 showCoupon2={this.state.showCoupon2} >

                    <div className={classes.IMG}>
                        <img src={coupon2} alt="5 Terre" />
                        <span onClick={this.closeCoupon2} className={classes.span}
                        ><i className="far fa-times-circle"></i></span>
                    </div>
                </Modal2>


                <div className={classes.polaroid} onClick={this.showCoupon2}>
                    <img src={coupon2} alt="Norther Lights" />
                    <div className={classes.container}>
                        <p>Get 30% off your purchase</p>
                    </div>
                </div>




                <Modal3 showCoupon3={this.state.showCoupon3} >

                    <div className={classes.IMG}>
                        <img src={coupon3} alt="5 Terre" />
                        <span onClick={this.closeCoupon3} className={classes.span}
                        ><i className="far fa-times-circle"></i></span>
                    </div>
                </Modal3>


                <div className={classes.polaroid} onClick={this.showCoupon3}>
                    <img src={coupon3} alt="Norther Lights" />
                    <div className={classes.container}>
                        <p>15% of All order</p>
                    </div>
                </div>


                <Modal4 showCoupon4={this.state.showCoupon4} >
                    <div className={classes.IMG}>
                        <img src={coupon4} alt="5 Terre" />
                        <span onClick={this.closeCoupon4} className={classes.span}
                        ><i className="far fa-times-circle"></i></span>
                    </div>
                </Modal4>
                <div className={classes.polaroid} onClick={this.showCoupon4}>
                    <img src={coupon4} alt="Norther Lights" />
                    <div className={classes.container}>
                        <p>15% of All order</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coupons;