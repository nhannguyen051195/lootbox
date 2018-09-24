import React, { Component } from 'react';
import './App.css';
//import Register from './components/register/logIn'
//import NavBar from './components/NavBar/NavBar'
import RouterURL from './components/RouterURL/RouterURL';
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className='container-flex'> 
      <RouterURL/>

      </div>
      </Router>
    );
  }
}

export default App;
