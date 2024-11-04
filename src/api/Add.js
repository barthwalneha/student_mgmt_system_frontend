import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_BACKGROUND } from "../utils/constants";

const Add = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const changeName = (name) => {
    setName(name.target.value);
  };
  const changeEmail = (email) => {
    setEmail(email.target.value);
  };
  const changeCourse = (course) => {
    setCourse(course.target.value);
  };

  const navigate = useNavigate();
  const changeDetails = (e) => {
    e.preventDefault();
    let details = { id, name, email, course };
    fetch("http://localhost:3001/student/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then(() => {
        alert("posted successfully");
        navigate("/all");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${HOME_BACKGROUND})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="p-5 border rounded"
        style={{ backgroundColor: "yellow", opacity: 0.9 }}
      >
        <h3 className="text-center mb-4">Student Form</h3>
        <form onSubmit={changeDetails}>
          <div className="mb-3">
            <label className="form-label">Id</label>
            <input
              type="number"
              value={id}
              className="form-control"
              id="id"
              disabled
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={changeName}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={changeEmail}
              className="form-control"
              id="email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <input
              type="text"
              value={course}
              onChange={changeCourse}
              className="form-control"
              id="course"
            />
          </div>

          <div className="d-flex">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              onClick={() => navigate("/all")}
              type="button"
              className="btn btn-secondary ms-3"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
