import React, { Component } from 'react';
import classes from './Modal.css';
//import Backdrop from '../Backdrop/Backdrop';

import Aux from '../../../hoc/Aux/Aux';



class Modal extends Component {
/*     shouldComponentUpdate(nextProps, nextState){
        return nextProps.show!== this.props.show || nextProps.children!==this.props.children
    }  */
    
    render() {
        return (
            <Aux>
             {/* <Backdrop show={this.props.show} clicked={this.props.modalClosed} /> */}

                <div className={classes.Modal}
                    style={{
                        display: this.props.showCoupon1 ? 'block' : 'none',
                        opacity: this.props.showCoupon1 ? '1' : '0',
                    }}>
                   {this.props.children}
                </div>
                </Aux>
        );
    }
}

export default Modal;