import React from "react";
import './navbarBanner.css';
import { Link } from "react-router-dom";

const NavbarBanner = () => {
    return (
        <div className="navbarBanner">
            <div className="navbarOption">
                <Link to = {'/Products'} className="navItem">Kid's Clothing</Link>
                <Link to = {'/Men"s collection'} className="navItem">Men's Collection</Link>
                <Link to = {'/women"s collection'} className="navItem">Women's Collection</Link>
                
                {/* <div className="navItem">Sale/Offers</div>
                <div className="navItem">New Arrivals</div> */}
            </div>
        </div>
    );
};

export default NavbarBanner;
