import React, { Fragment } from "react"
import '../../footer.css';


const Footer = () => {
    return (
        <Fragment>
            <div id="container">
                <div id="part1">
                    <div id="companyinfo"> <a id="sitelink" href="#">BBbootstrap</a>
                        <p id="title">Cool and Perfect Snippet code</p>
                        <p id="detail">We create awesome code snippets that will help you in creating your own beautiful site. </p>
                    </div>
                    <div id="explore">
                        <p id="txt1">Explore</p> <a class="link" href="#">Home</a> <a class="link" href="#">About</a> <a class="link" href="#">Snippet</a> <a class="link" href="#">Careers</a>
                    </div>
                    <div id="visit">
                        <p id="txt2">Visit</p>
                        <p class="text">Lincoln House </p>
                        <p class="text">78 Bhulabhai Desai Road </p>
                        <p class="text">Mumbai 400 026 </p>
                        <p class="text">Phone: (22) 2363-3611 </p>
                        <p class="text">Fax: (22) 2363-0350 </p>
                    </div>
                    <div id="legal">
                        <p id="txt3">Legal</p> <a class="link1" href="#">Terms and Conditions</a> <a class="link1" href="#">Private Policy</a>
                    </div>
                    <div id="subscribe">
                        <p id="txt4">Subscribe to US</p>
                        <form> <input id="email" type="email" placeholder="Email" /> </form> <a class="waves-effect waves-light btn">Subscribe</a>
                        <p id="txt5">Connect With US</p> <i className="fa fa-facebook-square social fa-2x"></i> <i className="fa fa-linkedin social fa-2x"></i> <i className="fa fa-twitter-square social fa-2x"></i>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default Footer
