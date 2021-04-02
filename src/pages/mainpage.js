import React from "react";
import Footer from "../components/Footer"
import "../pages/style.css"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar/index"
import {
    Link,
    Route,
    Switch
  } from "react-router-dom";

function Main() {
    return(
        <div className="body">
             <Navbar/>
     <Switch>
          <Route exact path="" component={AboutMe}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>           
      </Switch>

        <Footer/>
        </div>
    );
}

export default Main;