import React from "react";


const Contact = () =>{
    return(
        <div className="body">
        <section>

<h2 className="h1-responsive font-weight-bold text-left aboutme my-4">Contact us</h2>


<div className="row">

    <div className="col-md-6 mb-md-0 mb-6">
        <form id="contact-form" name="contact-form" action="" method="">


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


        </form>

        <div className="text-center text-md-left">
            <button type="submit" className="btn btn-danger">Send</button>
        </div>
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

</section>
        
        </div>
    );
}

export default Contact;