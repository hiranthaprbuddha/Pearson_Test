import React, { Component } from 'react';
import brief from '../assets/briefcase.svg';
import life from '../assets/life-buoy.svg'
import tool from '../assets/tool.svg'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container-fluid">
            
            <div className="background-greay">
               <p className="banner">Simplify your online shipping for<br></br> free this month!</p>
                <p className="banner-text">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At<br></br>
                     nam minimum ponderum. Est audiam animal molestiae te.</p>
                 <div className="row">  
                 <div className="col-md-4"></div>
                 <div className="col-md-4" >
                 <form className="form-inline">
                 <div class="banner-btn">
                    <button class="form-control btn btn-primary-blue mr-sm-2" type="submit">Start free trial </button>
                    <button class="btn btn-outline-blue my-2 my-sm-0" type="submit">Learn more </button>
                    </div>
                    </form>
                 </div>
                 <div className="col-md-4"></div>  
                </div>  
            </div>

            <div className="container">
              <div className="banner-g">
              <p className="banner-grow">
              Grow your business with better Shipping
              </p>
              <p className="section-title">We help the world’s leading organizations follow their shipping</p>
              </div>

              <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={brief} alt="Brief"/>
                    <div className="card-body">
                     <h5 className="card-title">Shipping communication</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                    <p className="card-text-dis">Discover</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top" src={life} alt="Card image cap"/>
                    <div className="card-body">
                     <h5 className="card-title">Marketing</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                    <p className="card-text-dis">Discover</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top" src={tool} alt="Card image cap"/>
                    <div className="card-body">
                     <h5 className="card-title">Logistic performance</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                    <p className="card-text-dis">Discover</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="container-fluid  section3-r">               
               <div className="row section3-bg">
                  <div className="col section3"></div>
                  <div className="col">
                        <p className="content-3">Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.</p>
                        <p className="section-3-text">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                     <form className="form-inline">
                        <div class="banner-btn">
                           <button class="form-control btn btn-primary-blue mr-sm-2" type="submit">Enroll now</button>
                           <button class="btn btn-outline-blue my-2 my-sm-0" type="submit">Read more</button>
                        </div>
                    </form>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="section4">
                  <p className="banner-grow">Grow your business with better Shipping</p>
                  <p className="section-title">We help the world’s leading organizations follow their shipping</p>
               </div>

               <div className="card-deck mt-5 mb-5">
                <div className="card">
                    <img className="card-img-top-1"/>
                    <div className="card-body">
                     <h5 className="card-title">Ad eos saepe lucilius</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top-1"/>
                    <div className="card-body">
                     <h5 className="card-title">Ad eos saepe lucilius</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top-1"/>
                    <div className="card-body">
                     <h5 className="card-title">Ad eos saepe lucilius</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top-1"/>
                    <div className="card-body">
                     <h5 className="card-title">Ad eos saepe lucilius</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                    </div>
                 </div>
               </div>
            </div>
        </div>

         );
    }
}
 
export default Home;