import React from "react";
import { useForm, ValidationError } from '@formspree/react';


function Contact(){
    const [state, handleSubmit] = useForm("mbjqjjzq");
    if (state.succeeded) {
        return(
            <div> <p>Thanks for joining!</p>
            <div className="col-md text-left aboutme text-center" id="stroke">
        <ul className="list-unstyled mb-0">
            <li className="fas fa-map-marker-alt fa-2x">
                <p className="contactsize">San Diego, CA 92105, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p className="contactsize">978-551-2148</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p className="contactsize">Shanelwebber@gmail.com</p>
            </li>
        </ul>
    </div>
     </div>
    )
    }
    return(
        <div>
        {/* <form onSubmit={handleSubmit} action="https://formspree.io/f/moqyqqke" method="POST">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        <div className="body">
        <section> */}

<h2 className="h1-responsive font-weight-bold text-left aboutme my-4">Contact us</h2>


<div className="row">

    <div className="col-md-6 mb-md-0 mb-6">
        <form onSubmit={handleSubmit}>


            <div className="row">


                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control"></input>
                        <label for="name" className="aboutme">Your name</label>
                    </div>
                  </div>

            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control"></input>
                    <label className="aboutme" for="email">Your email</label>
                </div>
            </div>
            </div>
            <div className="row">


                <div className="col-md-6">

                    <div className="lg-form">
                        <textarea id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label className="aboutme" for="message">Your message</label>
                    </div>

                </div>
            </div>
            <div className="text-center text-md-left">
            <button type="submit" className="btn btn-danger">Send</button>
        </div>

        </form>

        
        <div className="status"></div>
    </div>

    <div className="col-md text-left aboutme text-center" id="stroke">
        <ul className="list-unstyled mb-0">
            <li className="fas fa-map-marker-alt fa-2x">
                <p className="contactsize">San Diego, CA 92105, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p className="contactsize">978-551-2148</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p className="contactsize">Shanelwebber@gmail.com</p>
            </li>
        </ul>
    </div>
  

</div>

        
        </div>
      
    );
}

export default Contact;