import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="signIn__container">
      <Link to="/" className="back-to-home">
        <i className="fas fa-arrow-circle-left mr-4" />
        Back To Home
      </Link>
      <div className="signIn">
        <form className="signIn__form">
          <div className="form-group">
            <label for="#email">Email:</label>
            <input
              id="email"
              className="form-control"
              placeholder="username or Email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label for="#password">password:</label>
            <input
              id="password"
              className="form-control"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="signIn__btns-container my-4">
            <input
              type="submit"
              className="btn--dark-blue btn"
              value="Log In"
            />

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Remember Me
              </label>
            </div>
          </div>
          <a href="#" className="signIn__link-forget">
            Forgot password ?
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
