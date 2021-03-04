import React from "react";
import Shane from "../Portfolio/images/DSC_5408.jpg"


const AboutMe = () =>{
    return(
        <div className="body">
        <section className="body">
                      <h1 class="aboutme" id="stroke">About me</h1>
                        <div class="container">
                          <div class="row">
                            <div class="col-md-4 col-sm-6">
                              <a class="navbar-brand" href={Shane}>
                                <img class="img-fluid" src={Shane} alt="Shane Webber"></img>
                              </a>
                            </div>
                                            <p class="col-lg font-weight-bold text-white">
                                              <span class="span2">Hello World! I'm Shane</span>
                                              <br></br>
                                                I am an audio engineer, lighting designer, laser operator, graphic designer, video jockey, music producer, DJ, and now web developer! I am orginally from Massachusettes, now living in San diego. 
                                            </p>                
                         </div>
                       </div>
              </section>

        </div>
    );
}

export default AboutMe;