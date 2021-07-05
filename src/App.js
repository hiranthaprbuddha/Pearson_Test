import React, { Component } from 'react';

import NavBar from './components/navbar';
import './App.css';
import './css/pearson.css';
import Home from './components/home';

class App extends Component {
  render() { 
    return ( 
      <div>
        <NavBar/>
       <Home/>

      </div>
      
     );
  }
}
 
export default App;

