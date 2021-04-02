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
import Cryptic from "./images/Cryptic.png"
import Planner from "./images/Planner.png"
import Laughing from "./images/Laughing.png"
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container:{
        marginTop: "10%",
        paddingBottom: "10%"

    },
    githubBtn:{
        color: "#ffffff",
        width: "50%",
        marginLeft: "-6.5%"

    },
   linkBtn:{
        color: "#ffffff",
        width: "50%",

    }
  
  });


function Portfolio() {
    const classes = useStyles()
    return(
        <Container className={classes.container}>
              
            <Grid justify="center" container spacing={3}>
            <Grid  item xs={4}>
                <img className="img-fluid" src={Cryptic} alt="Cryptic Home Page"></img>
                <Grid row>
                <Button variant="outlined"className={classes.githubBtn} color="secondary" href="https://github.com/AlignSD/Ticket_Bits">GitHub</Button>
                <Button variant="outlined"className={classes.linkBtn} color="primary" href="https://ticket-bits.herokuapp.com/">Cryptic</Button>
                </Grid>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={Planner} alt="Planner for Planners"></img>
                <Grid row>
                <Button variant="outlined"className={classes.githubBtn} color="secondary" href="https://github.com/916Serg619/Project2">GitHub</Button>
                <Button variant="outlined"className={classes.linkBtn} color="primary" href="https://salty-earth-89090.herokuapp.com/">P4P</Button>
                </Grid>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={Laughing} alt="Laughing Save the Day"></img>
                <Grid row>
                <Button variant="outlined"className={classes.githubBtn} color="secondary" href="https://github.com/larrygamboa/laughing-saves-the-day">GitHub</Button>
                <Button variant="outlined"className={classes.linkBtn} color="primary" href="https://larrygamboa.github.io/laughing-saves-the-day/">LSD</Button>
                </Grid>
                </Grid>
                
                <Grid item xs={4}>
                <img className="img-fluid" src={img1} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img2} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img3} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img4} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img5} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img6} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img7} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img8} alt="House2Ourselves logo"></img>
                </Grid>
                <Grid item xs={4}>
                <img className="img-fluid" src={img9} alt="House2Ourselves logo"></img>
                </Grid>




            </Grid>
            </Container>
        
       
    );
}

export default Portfolio;



{/* <div className="body">

        
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
</div> */}