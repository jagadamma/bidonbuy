import React from 'react';
import {NavLink} from "react-router-dom";
import {TbHeartHandshake} from "react-icons/tb"
const Footer = () => {
  return (
    <div className="footer">
    
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6" style={{paddingBottom: "100px"}}>
    <div className="col mb-3">
    <p className="logoImage"><TbHeartHandshake/></p>
    <p className="logoName" >BidOnBuy</p>
    </div>

    <div className="col">
      <h5>Get to Know Us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><NavLink to="/aboutus" className="nav-link p-0 text-muted">About Us</NavLink></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our History</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Community</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Press Releases</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Find a Product</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Watchlist</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Saved Searches</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Search by Category</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Auctions</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Today's Auctions</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Join Auction</a></li>
      </ul>
    </div>
    <div className="col">
      <h5>Support</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">How to Buy</a></li>
        <li className="nav-item mb-2"><NavLink to="/faq" className="nav-link p-0 text-muted">FAQ's</NavLink></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Videos</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Member Fees</a></li>
      </ul>
    </div>
    <div className="col">
      <h5>Connect with Us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="https://facebook.com/bidonbuy" className="nav-link p-0 text-muted">Facebook</a></li>
        <li className="nav-item mb-2"><a href="https://instagram.com/bidonbuy/" className="nav-link p-0 text-muted">Instagram</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">LinkedIn</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">YouTube</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
      </ul>
    </div>
  </footer>
   <div className='footerBottom d-flex flex-wrap justify-content-around '>
    <p>Copyright @ 2022 BidOnBuy All Rights Reserved</p>
    <p>Site Map</p>
    <p><a className="text-white" href="mailto:Support@bidonbuy.com">Contact Us</a></p>
    <p>Sell a Vehicle</p>
    <p>Terms of Service</p>
    <p>Privacy Policy</p>
    <p>Copyright</p>
    <p><NavLink to="/terms" className="nav-link p-0 text-light">Terms & Conditions</NavLink></p>
    <p>Cookie Policy</p>
   </div>
</div>
  )
}

export default Footer
