import React from 'react';
import Button from '../components/button';
import { NavLink } from 'react-router';



const Dashboard = () => {
  return (
    <>
    <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container-fluid">
            <a className="navbar-brand" >
                <img src='/img/Bitmap.png' alt="Getchange logo" height="50" />
            </a>
            <div className="btn-container">
                <NavLink  to={"/signin"}><Button extra={'all-btn'}>Sign In</Button></NavLink>
            </div>
        </div>
    </nav>
    <section className="hero">
        <div className="container1">
            <div className="main-content">
                <h1>Welcome to Our Dashboard</h1>
                <p>Explore the features and functionalities of our application. Sign up to get started!</p>
                <NavLink  to={"/signup"}><Button extra={"all-btn"}>Sign Up</Button></NavLink>
            </div>
        </div>
    </section>
    <footer className="text-center p-3 bg-light">
        <p>© 2019 Tinylabs. All rights reserved.</p>
    </footer>
    </>
);
};

export default Dashboard;