import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function loginForm() {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form>
            <div className="form-inner">
              <h2>Login Virtual Shop</h2>
              {/* ERROR*/}
              <div className="form-group">
                <label htmlFor="user">User:</label>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  id="user"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  id="password"
                />
              </div>
              <div className="form-group">
                <Link className="btn btn-primary"  to="/home">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

loginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default loginForm;
