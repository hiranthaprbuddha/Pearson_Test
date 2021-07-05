import React, { Component } from 'react';
import '../styles/pearson.css';
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

                     <div className="flexbox-container-banner">
                  <div className="f-item1">
                  </div>
                  <div className="f-item2">
                        <button className="btn btn-primary-blue mr-sm-2 f-item2 " type="submit">Start free trial</button>
                        <button className="btn btn-outline-blue my-2 my-sm-0 f-item2" type="submit">Learn now</button>
                  </div>
                  <div className="f-item3">
                  </div>
                  
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
                    <img className="card-img-top" src={brief} alt="brief"/>
                    <div className="card-body">
                     <h5 className="card-title">Shipping communication</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                    <p className="card-text-dis">Discover</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top" src={life} alt="life"/>
                    <div className="card-body">
                     <h5 className="card-title">Marketing</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                    <p className="card-text-dis">Discover</p>
                    </div>
                 </div>
                 <div className="card">
                    <img className="card-img-top" src={tool} alt="tool"/>
                    <div className="card-body">
                     <h5 className="card-title">Logistic performance</h5>
                    <p className="card-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
                    <p className="card-text-dis">Discover</p>
                    </div>
                 </div>
               </div>
            </div>
            
               <div className="row section3-bg">
                  <div className="col section3">Adeossaepelucilius,nosterpostulant</div>
                  <div className="col">
                        <p className="content-3">Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.</p>
                        <p className="section-3-text">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                     <form className="form-inline">
                        <div className="banner-btn">
                           <button className="form-control btn btn-primary-blue mr-sm-2" type="submit">Enroll now</button>
                           <button className="btn btn-outline-blue my-2 my-sm-0" type="submit">Read more</button>
                        </div>
                    </form>
                  </div>
               </div>
            

            <div className="container">
               <div className="section4">
                  <p className="banner-grow">Grow your business with better Shipping</p>
                  <p className="section-title">We help the world’s leading organizations follow their shipping</p>
               </div>


               <div className="flexbox-container">
                  <div className="flexbox-item flexbox-item1">
                     <h5 className="f-title">Ad eos saepe lucilius</h5>
                     <p className="f-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                  </div>
                  <div className="flexbox-item flexbox-item2">
                  <h5 className="f-title">Ad eos saepe lucilius</h5>
                     <p className="f-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                  </div>
                  <div className="flexbox-item flexbox-item3">
                  <h5 className="f-title">Ad eos saepe lucilius</h5>
                     <p className="f-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                  </div>
                  <div className="flexbox-item flexbox-item4">
                  <h5 className="f-title">Ad eos saepe lucilius</h5>
                     <p className="f-text">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                  </div>
               </div>

               
            </div>
        </div>
         );
    }
}
 
export default Home;