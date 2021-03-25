import React, { Fragment } from "react"
import './footer.css';


const Footer = () => {
    return (
        <Fragment>

<footer class="bg-white">
     <div class="container py-5">
         <div class="row py-3">
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">About</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" class="text-muted">Contact Us</a></li>
                     <li class="mb-2"><a href="#" class="text-muted">Stories</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Help</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" class="text-muted">Payments</a></li>
                     <li class="mb-2"><a href="#" class="text-muted">Cancellation</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Policy</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" class="text-muted">Terms Of Use</a></li>
                     <li class="mb-2"><a href="#" class="text-muted">Privacy</a></li>
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
                     <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
                 </ul>
             </div>
             <div class="col-lg-4 col-md-6 mb-lg-0">
                 <ul class="list-inline mt-4">
                     <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-2x fa-twitter"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-2x fa-facebook-f"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-2x fa-instagram"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-2x fa-youtube"></i></a></li>
                     <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-2x fa-google"></i></a></li>
                 </ul>
             </div>
         </div>
     </div>
     <div class="bg-light py-2">
         <div class="container text-center">
             <p class="text-muted mb-0 py-2">© 2019 ITStep All risghts reserved.</p>
         </div>
     </div>
</footer>
        </Fragment>
    )
}


export default Footer
