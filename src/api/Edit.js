import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { studentId } = useParams();

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeCourse = (event) => {
    setCourse(event.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/student/${studentId}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setId(result.id);
        setName(result.name);
        setCourse(result.course);
        setEmail(result.email);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const setDetails = (event) => {
    event.preventDefault();
    let details = { id, name, email, course };
    fetch("http://localhost:3001/student/" + studentId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then(() => {
        alert("Updated successfully");
        navigate("/all");
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  };

  return (
    <>
      <h3 className="text-center mt-5">Student Form</h3>

      <div className="d-flex justify-content-center align-items-center mt-5 vh-60">
        <form onSubmit={setDetails} className="p-5 border rounded">
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
              value={name}
              onChange={changeName}
              type="text"
              className="form-control"
              id="name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={email}
              onChange={changeEmail}
              type="email"
              className="form-control"
              id="email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <input
              value={course}
              onChange={changeCourse}
              type="text"
              className="form-control"
              id="course"
            />
          </div>

          <div className="d-flex">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-3"
              onClick={() => navigate("/all")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
