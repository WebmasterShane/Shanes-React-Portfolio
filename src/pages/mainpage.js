import React from "react";
import Footer from "../components/Footer"
import "../pages/style.css"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar/index"
import Grid from "@material-ui/core/Grid";
import PostScript from "../components/MatrixRain"
import { makeStyles } from '@material-ui/core/styles';
import {
    Link,
    Route,
    Switch
  } from "react-router-dom";


  const useStyles = makeStyles({
    rain:{
      zIndex: -100,
      opacity: "10%"
    }
  })

function Main() {
  const classes = useStyles()
    return(
        <div className="body">
             <Navbar/>
             <Grid>
     <Switch>
          <Route exact path="/" component={AboutMe}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>           
      </Switch>
      </Grid>
      {/* <PostScript className={classes.rain}>

      </PostScript> */}

        <Footer/>
        </div>
    );
}

export default Main;