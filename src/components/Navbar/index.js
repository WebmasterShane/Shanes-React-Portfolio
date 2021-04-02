import React from "react";
import {
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand">Shane Webber</a>
 
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
     );
    }

    export default Navbar;