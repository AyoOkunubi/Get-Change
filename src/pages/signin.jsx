import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Carousel from "../components/carousel";
import { useDispatch } from "react-redux";
import { LogIn } from "../redux/authSlice";

const Signin = (e) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const[email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LogIn({ email, password })).then((result) => {
      if (LogIn.fulfilled.match(result)) {
        navigation('/user'); 
      } else {
        console.error("Login failed:", result.error.message);
      }
    });
  };  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="container">
      <div className="left-section">
        <Carousel></Carousel>
      </div>
      <div className="right-section">
        <div className="right-align">
          <h2>Sign In to Your Account</h2>
          <p>
            Don't have an account? <NavLink to={"/signup"}>Sign up</NavLink>
          </p>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <div className="input-group">
                  <input
                  onChange={handleChangeEmail}
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <span className="input-group-text">
                    <i className="fas fa-at"></i>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="input-group">
                  <input
                  onChange={handleChangePassword}
                    className="form-control"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <span className="input-group-text">
                    <i className="fas fa-eye"></i>
                  </span>
                </div>
              </div>
              <div className="btn-container">
                <Button btntype="submit" extra="all-btn">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom-text">
          <p className="terms">By signing in, you agree to our
            <NavLink to={'/'}> Terms</NavLink> and <NavLink to={'/user'}>Privacy Policy</NavLink>
          </p>
          <p className="terms copy">© 2019 Tinylabs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
