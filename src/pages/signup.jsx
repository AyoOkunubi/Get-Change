import React from 'react';
import Button from '../components/button';
import { NavLink } from 'react-router';
import Carousel from '../components/carousel';


const Signup = () => {
  return (
    <>
     <div className="container">
        <div className="left-section">
            <Carousel />
        </div>
        <div className="right-section">
            <div className='right-align'>
            <h2>Create your free account</h2>
            <p>Already registered? <NavLink to={'/signin'}>Sign in</NavLink></p>
            <div className="form-container">
                <form>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label className="form-label" for="firstName">First Name</label>
                            <div className="input-group">
                                <input className="form-control" id="firstName" type="text" placeholder='Enter your first name'/>
                                <span className="input-group-text"><i className="fas fa-user" ></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="form-label" for="lastName">Last Name</label>
                            <div className="input-group">
                                <input className="form-control" id="lastName" type="text" placeholder='Enter your last name'/>
                                <span className="input-group-text"><i className="fas fa-user" ></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="email">Email</label>
                        <div className="input-group">
                            <input className="form-control" id="email" type="email" placeholder='Enter your email'/>
                            <span className="input-group-text"><i className="fas fa-at" ></i></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="password">Password</label>
                        <div className="input-group">
                            <input className="form-control" id="password" type="password" placeholder='Enter Your Password'/>
                            <span className="input-group-text"><i className="fas fa-eye"></i></span>
                        </div>
                    </div>
                    <div className="btn-container">
                        <Button extra="all-btn" btntype="submit">Continue</Button>
                    </div>
                </form>
            </div>
            </div>
            <div className='bottom-text'>
                <p className="terms">By signing up, you agree to our <NavLink to={'/'}>Terms</NavLink> and<NavLink to={'/user'}> Privacy Policy</NavLink></p>
                <p className="terms copy">© 2019 Tinylabs. All rights reserved.</p>
            </div>
        </div>
    </div>
    </>
);
};

export default Signup;