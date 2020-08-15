import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {UseStateValue} from "../../contextStore";
import {auth} from '../../firebase';
import SearchBar from './SearchBar';
//import SearchExampleStandard from './SearchBar';

function Header() {
    const [{cart, user}] = UseStateValue();
    console.log(cart)

    const logOut = () => {
        if (user){
            auth.signOut();
        }
    }
    const renderEmail = () => {
        if (user){
            let userEmail = user.email
            const index = userEmail.indexOf('@')
            return userEmail.substring(0, index)
    }
}
    return (
        <>
        <nav className="header">
            <Link to="/">
         <img alt="amazon logo"className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
         </Link>
         <div className="header__search">
             {/* <input type="text" className="header__searchInput"/> */}
         <SearchBar className="header__searchInput"/>
         <SearchIcon className="header__searchIcon"/>
         </div>
         <div className="header__tags">
             <Link to={!user && "/login"} className="header__link">
             <div onClick={logOut} className="header__tag">
    <p className="header__tagLineOne">Hello {renderEmail()}</p>
             <p className="header__tagLineTwo">{user ? 'Sign Out' : 'Sign In'}</p>
             </div>
             </Link>
             <Link to="/returns&orders" className="header__link">
             <div className="header__tag">
             <p className="header__tagLineOne">Returns</p>
             <p className="header__tagLineTwo">& Orders</p>
             </div>
             </Link>
             <Link to="/" className="header__link">
             <div className="header__tag">
             <p className="header__tagLineOne">Your</p>
             <p className="header__tagLineTwo">Prime</p>
             </div>
             </Link>
             <Link to="/cart" className="header__link">
             <div className="header__tagCheckout">
                 <ShoppingBasketIcon/>
    <span className="header__tagLineTwo header__cartCounter">{cart?.length}</span>
             </div>
             </Link>
         </div>
        </nav>
        <div>
       {/* <SearchExampleStandard/>*/}
        </div>
        </>
    )
}

export default Header;
