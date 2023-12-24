import React from 'react';
import './Login.css';
import '../Logo.png';

const Login = () => {
  return (
    <div className="login-container">
      <span class="border border-dark">

        <div className="col align-items-center">
          <form className="form-container ">
          <h1 className='text-center fw-lighter' >LOGIN</h1>
          <div className="register-container">
            <h6>Don't Have an account ? <a href='/register'>Sign up here.</a></h6>
            </div>
              <div className="form-group fw-bold">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="form-group fw-bold">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="forgot-container">
            <h6><a href='/forgot'>Forgot your password ?</a></h6>
            </div>

              <div className="d-grid  col-8 mx-auto">
                  <button className="btn btn-outline-dark" type="button">Login</button>
                </div>


            </form>
          </div>

        </span>
      </div>
  );
};

export default Login;
