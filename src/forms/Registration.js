import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { HOME_BACKGROUND } from "../utils/constants";

const Registration = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const setDetails = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Invalid email format!");
      return;
    } else {
      setErrorMessage("");
    }

    let details = { id, name, email, password, confirmPassword };
    fetch("http://localhost:3001/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((res) => {
        alert("Account created! Log in using email and password.");
      })
      .catch((err) => {
        alert(err);
      });
  };

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
      <Header />
      <div
        className="form-container p-4  rounded shadow bg-warning "
        style={{ maxWidth: "400px", width: "100%", backgroundcolor: "yellow" }}
      >
        <h2 className="text-center mb-4">Registration Form</h2>
        <form onSubmit={setDetails}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={changeName}
              type="text"
              className="form-control"
              id="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={changeEmail}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={changePassword}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={changeConfirmPassword}
              type="password"
              className="form-control"
              id="confirmPassword"
            />
          </div>
          <div className="d-flex mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
          <p className="text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
