import React, { Component } from 'react';

class Footer  extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
            <div className="row footer">
            <div className="col">
               <ul className="footer-text-left">
                  <li className="pad">Terms of use</li>
                  <li  className="pad">Privacy</li>
                  <li  className="pad">Cookies</li>
                  <li  className="pad">Accessibility</li>
               </ul>
            </div>
            <div className="col"><p className="footer-text-right">Copyright © 1996–2021 Pearson All rights reserved</p></div>
         </div>


            </div>
            
         );
    }
}
 
export default  Footer;



