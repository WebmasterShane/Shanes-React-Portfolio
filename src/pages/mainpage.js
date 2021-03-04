import React from "react";
import Footer from "../components/Footer"
import "../pages/style.css"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from "react-router-dom";

function Main() {
    return(
        <Router>
        <div className="body">
             <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="images/DSC_5408.jpg">Shane Webber</a>
 
           <button className="navbar-toggler" data-toggle="collapse" data-target="#shrink">
             <span className="navbar-toggler-icon"></span>
           </button>
 
                 <div className="collapse navbar-collapse" id="shrink">
                     <ul className="navbar-nav ml-auto">
                           <li className="nav-item active">
                               <Link className="nav-link" to="/contact">Contact</Link>
                           </li>
                           <li className="nav-item active">
                               <Link className="nav-link" to="/portfolio">Portfolio</Link>
                           </li>
                           <li className="nav-item active">
                               <Link className="nav-link" to="/">About Me</Link>
                           </li>
                           <li className="nav-item active">
                            <a className="nav-link" href="/Assets/Shane_Webber_Resume.PDF" download>Resume Downlaod</a>
                        </li>
                     </ul>
 
                 </div>
     </nav>
     <Switch>
          <Route exact path="/" component={AboutMe}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>           
      </Switch>

        <Footer/>
        </div>
        </Router>
    );
}

export default Main;