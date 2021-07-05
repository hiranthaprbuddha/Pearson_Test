import React, { Component } from 'react';
import angella from '../../assets/angella-logo.svg'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <img src={angella} alt="angella logo"/>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav  mx-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="/#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">Contact</a>
                    </li>
                </ul>
            <form className="form-inline  my-2 my-lg-0">
                <button className="form-control btn btn-primary-blue mr-sm-2" type="submit">Signup </button>
                <button className="btn btn-outline-blue my-2 my-sm-0" type="submit">Login </button>
            </form>
        </div>
      </div>
    </nav>
         );
    }
}
 
export default NavBar;