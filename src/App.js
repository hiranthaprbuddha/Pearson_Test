import React, { Component } from 'react';

import NavBar from './components/navbar/navbar';
import './App.css';
import Home from './components/home';
import Footer from './components/footer/footer';


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

