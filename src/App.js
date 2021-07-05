import React, { Component } from 'react';

import NavBar from './components/navbar';
import './App.css';
import './css/pearson.css';
import Home from './components/home';
import Footer from './components/footer';


class App extends Component {
  render() { 
    return ( 
      <div>
        <NavBar/>
        <Home/> 

        <Footer/>
      </div> 
     );
  }
}
 
export default App;

