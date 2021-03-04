import React from "react";
import img1 from "./images/dan.jpg"
import img2 from "./images/h2o.jpg"
import img3 from "./images/h2o1st.jpg"
import img4 from "./images/h2o2nd.jpg"
import img5 from "./images/lasercurtain.jpg"
import img6 from "./images/matrix.jpg"
import img7 from "./images/mj_dk_1.jpg"
import img8 from "./images/ps_roof.jpg"
import img9 from "./images/Starlogged.jpg"

const Portfolio = () =>{
    return(
        <div className="body">

        
        <h2 className="h1-responsive font-weight-bold text-left aboutme my-4">My Work</h2>
     
  
        <div className="row">
  
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/h2o.jpg">
                  <img className="img-fluid" src={img1} alt="House2Ourselves logo"></img>
                  </a>
              </div>
    
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/ps_roof.jpg">
                  <img className="img-fluid" src={img2} alt="Post Script DJs playing at a party"></img>
                  </a>
              </div>
  
              <div className="col-md-4">
                <a className="navbar-brand" href="images/dan.jpg">
                <img className="img-fluid" src={img3} alt="Staybad records release art work for Success"></img>
                </a>
              </div>
  
              <div className="col-md-4">
                <a className="navbar-brand" href="images/lasercurtain.jpg">
                <img className="img-fluid" src={img4} alt="inside spin night club with lasers shooting"></img>
                </a>
              </div>
  
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/matrix.jpg">
                  <img className="img-fluid" src={img5} alt="fan of green lasers"></img>
                  </a>
              </div>
  
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/h2o1st.jpg">
                  <img className="img-fluid" src={img6}alt="Post Script djing inside a frame"></img>
                  </a>
              </div>
  
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/h2o2nd.jpg">
                  <img className="img-fluid" src={img7} alt="Spin night club stage with frame"></img>
                  </a>
              </div>
  
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/mj_dk_1.jpg">
                  <img className="img-fluid" src={img8} alt="staybad records release art work for Heavy Feeling"></img>
                  </a>
              </div>
  
              <div className="col-md-4">
                  <a className="navbar-brand" href="images/Starlogged.jpg">
                  <img className="img-fluid" src={img9} alt="staybad records release art for starlogged"></img>
                  </a>
              </div>
          
    
        </div>
        </div>
        
       
    );
}

export default Portfolio;