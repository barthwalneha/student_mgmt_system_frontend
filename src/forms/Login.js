import React from "react";
import { Link } from "react-router-dom";
import { HOME_BACKGROUND } from "../utils/constants";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HOME_BACKGROUND})`,
        opacity: 0.9,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="form-container p-4  rounded shadow bg-warning "
        style={{ maxWidth: "400px", width: "100%", backgroundcolor: "yellow" }}
      >
        <h2 className="text-center mb-4">Login Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <div className="d-flex mb-3 mt-4 mx-6  ">
            <button type="submit" className="btn btn-primary w-25 me-5 ">
              Submit
            </button>

            <Link to="/">
              <button type="button" className="btn btn-primary w-75 ms-5">
                Back
              </button>
            </Link>
          </div>
          <p className="text-center mt-5">
            If you don't have an account <Link to="/">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
