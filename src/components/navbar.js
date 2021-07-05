import React, { Component } from 'react';
import logo from '../assets/angella-logo.svg'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <img src={logo}/>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav  mx-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Features<span className="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            <form class="form-inline  my-2 my-lg-0">
                <button class="form-control btn btn-primary-blue mr-sm-2" type="submit">Signup </button>
                <button class="btn btn-outline-blue my-2 my-sm-0" type="submit">Login </button>
            </form>
        </div>
      </div>
    </nav>
         );
    }
}
 
export default NavBar;