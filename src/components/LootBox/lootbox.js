import React, { Component } from 'react';
import classes from './lootbox.css';
import gift from '../../assets/logo/gift.png';
import Navbar from '../NavBar/NavBar';
import LootboxModal from './LootboxModal/LootboxModal';

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
                <LootboxModal showCoupon1={this.state.showCoupon1} >

                    <div className={classes.IMG}>
                     <span onClick={this.closeCoupon1} className={classes.span}
                        ><i className="far fa-times-circle"></i></span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                       
                    </div>
                </LootboxModal>


                <div className={classes.polaroid} onClick={this.showCoupon1}>
                    <img src={gift} alt="5 Terre" />
                    <div className={classes.container}>
                        <p>Up to 40% off during September</p>
                    </div>
                </div>


                <div className={classes.polaroid}>
                    <img src={gift} alt="Norther Lights" />
                    <div className={classes.container}>
                        <p>Get 30% off your purchase</p>
                    </div>
                </div>
                <div className={classes.polaroid}>
                    <img src={gift} alt="Norther Lights" />
                    <div className={classes.container}>
                        <p>15% of All order</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default lootbox;