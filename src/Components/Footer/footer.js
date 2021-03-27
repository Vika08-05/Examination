import React, { Fragment } from "react"
import './footer.css';


const Footer = () => {
    return (
        <Fragment>

<footer className="bg-white">
     <div className="container py-5">
         <div className="row py-3">
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a  className="text-muted">Contact Us</a></li>
                     <li className="mb-2"><a  className="text-muted">Stories</a></li>
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a  className="text-muted">Payments</a></li>
                     <li className="mb-2"><a  className="text-muted">Cancellation</a></li>
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Policy</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a  className="text-muted">Terms Of Use</a></li>
                     <li className="mb-2"><a  className="text-muted">Privacy</a></li>
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a  className="text-muted">Login</a></li>
                     <li className="mb-2"><a  className="text-muted">Register</a></li>
                 </ul>
             </div>
             <div className="col-lg-4 col-md-6 mb-lg-0">
                 <ul className="list-inline mt-4">
                     <li className="list-inline-item"><a  target="_blank" title="twitter"><i className="fa fa-2x fa-twitter"></i></a></li>
                     <li className="list-inline-item"><a  target="_blank" title="facebook"><i className="fa fa-2x fa-facebook-f"></i></a></li>
                     <li className="list-inline-item"><a  target="_blank" title="instagram"><i className="fa fa-2x fa-instagram"></i></a></li>
                     <li className="list-inline-item"><a  target="_blank" title="pinterest"><i className="fa fa-2x fa-youtube"></i></a></li>
                     <li className="list-inline-item"><a  target="_blank" title="vimeo"><i className="fa fa-2x fa-google"></i></a></li>
                 </ul>
             </div>
         </div>
     </div>
     <div className="bg-light py-2">
         <div className="container text-center">
             <p className="text-muted mb-0 py-2">© 2019 ITStep All risghts reserved.</p>
         </div>
     </div>
</footer>
        </Fragment>
    )
}


export default Footer
