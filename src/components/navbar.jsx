import React from 'react';
import { NavLink } from 'react-router';
import Button from './button';

const Navbar = ({children}) => {
  return (
    <>
    <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container-fluid">
            <NavLink to={'/'}><img className="navbar-brand" src='/img/Bitmap.png' alt="Getchange logo" height="50" /></NavLink>
            <div className="user-info dropdown">
                <img src="/img/Ellipse5.png" alt="User profile picture" width={30} height={30}/>
                <Button extra={"dropdown-toggle"} data-bs-toggle="dropdown" aria-expanded="false">Hi, Joshua</Button>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to={"/signin"}>Sign In</NavLink></li>
                    <li><NavLink className="dropdown-item" to={"/signup"}>Sign Up</NavLink></li>
                    <li><NavLink className="dropdown-item" to={"/"}>Log Out</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="d-flex">
        <div className="sidebar">
            <div className="nav flex-column">
                <NavLink className="nav-item" to={"/cart"}><i className="fa-solid fa-cart-shopping"></i></NavLink>
                <NavLink className="nav-item" to={"/user"}><i className="fa-solid fa-user"></i></NavLink>
                <NavLink className="nav-item" to={"/products"}><i className="fa-solid fa-cube"></i></NavLink>
            </div>
        </div>
        {children}
    </div> 
    </>
);
};

export default Navbar;