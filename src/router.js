import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './pages/user';
import Cart from './pages/cart';
import Products from './pages/products';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';



function ProjectRoutes(params) {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="user" element={<User/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="products" element={<Products/>} />
            <Route path="signin" element={<Signin/>} />
            <Route path="signup" element={<Signup/>} />
        </Routes>
    </Router>
  )
}

export default ProjectRoutes;