import React from "react";
import Shane from "../Portfolio/images/DSC_5408.jpg"


const AboutMe = () =>{
    return(
        <div className="body">
        <section className="body">
                      <h1 class="aboutme" id="stroke"></h1>
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
                                              <p class="col-lg font-weight-light">
                                                I am a recent graduate from UCSD in full-stack web-development. I have expirience in coding languages such as HTML, CSS, JavaScript, and Solidity. I am able to utilize back-end databases such as MongoDB and MySQL. I am also familiar with JavaScript frame works like React.js, Node.js, and express. Using this skills i am able to create MERN and SERN stack applications that are responsive and up to date with the industry standard for web applications. In my continued studies i have been spending time learning the technologies behind creating block-chain applications, and how they can revolutionize the way web applications use databases. 
                                                <br></br>
                                                </p>
                                                <br></br>
                                                <p class="col-lg font-weight-light">
                                                Outside of Web-Development, for the past 10 years i have been working in the concert production industry. Working as a Lighting Designer, Laser Operator, Visual Designer/Jockey, Audio Engineer, Production Manager, Stage Manager, and Audio/Visual Technician.
                                                Music has been and always will be my first passion. I started DJing and producing music in 2011 with my twin brother, and still currently releasing music and playing shows as Post Script. I Started a record label named Staybad with my best friends. We have not only seen success on platforms such as Beatport and TraxSource but in hosting our own events in cities like San Diego, Boston, New York, Miami, Chicago, Las Vegas, Seattle, and Detroit.
                                            </p>      
                                            </p>          
                         </div>
                       </div>
              </section>

        </div>
    );
}

export default AboutMe;