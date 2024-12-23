import React from "react";
import './navbarBelt.css';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

const NavbarBelt = () => {

    const cartItem = useSelector((state) => state.cart.items);
    return (
        <div className="navbarBelt">
            <Link to = {'/'} className="logoNavbelt">
                <h1 className="mainTitle">Mytalorzone</h1>
                <p className="subTitle">By Sahiba</p>
            </Link>

            <div className="searchbarNavbelt">
                <input type='text' className='navbarBeltSearchbox' placeholder='search products.....'/>
                <SearchIcon sx={{fontSize:"26px"}} className='searchIconNavbarBeltIcon' />

            </div>

            <Link to = {'/cart'} className="rightNavbelt">
                <span className='cartTitleNumbernavbarBelt'>{cartItem.length}</span>
                <div className="hellotopnavbarshoping">
                    <div className="localMall"><LocalMallIcon /></div> <span className='cartTitle'>Cart</span></div>
            </Link>

            <div className="bookmarkicon">
              <div><BookmarkIcon sx={{fontSize:20,marginTop:0,marginLeft:-0.4}}/><span className="bookmark">Bookmark</span></div> 
            </div>

            <div>
                <div><AccountCircleIcon sx={{fontSize:25,marginTop:0,marginLeft:-0.4}} /><span className="profilelogo">Profile</span></div>
            </div>
        </div>
    ) 
}

export default NavbarBelt;
