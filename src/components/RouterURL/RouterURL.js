import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
//import MainPage from '../MainPage/Mainpage';
import Login from '../register/logIn'
import signUp from '../register/signUp';
import lootbox from '../LootBox/lootbox';
import coupon from '../Coupons/Coupons'



class RouterURL extends Component {
    render() {
        return (
            <div>
                    <Switch> {/* chi bao quanh phan <Route></Route> Tranh lap lai trang home + nhung trang khac */}
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/sign-up" component={signUp}/>
                    <Route exact path="/loot-box" component={lootbox}/>
                    <Route exact path="/coupon" component={coupon}/>







                     {/* Localhost:3000/lien-cddwsxsxsx=> HOmePage */}
                    </Switch>
                
            </div>
        );
    }
}

export default RouterURL;