import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/student", { method: "GET" })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
      });
  }, []);

  const deleteData = (id) => {
    fetch("http://localhost:3001/student/" + id, { method: "DELETE" })
      .then(() => {
        alert("deleted successfully");

        window.location.reload();
      })

      .catch((err) => {
        alert(err);
      });
  };
  const navigate = useNavigate();
  const editData = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <div>
      <h1 class="text-center fs-1 fw-bold text-primary mt-5 mb-3">
        Besant Technologies{" "}
      </h1>
      <navigate to="/add">
        <button className="btn btn-primary w-1  " type="button">
          Add+
        </button>
      </navigate>

      <div className="table-responsive">
        <table className="table table-bordered table-hover vh-50">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.course}</td>
                <td>
                  <button
                    onClick={() => editData(item.id)}
                    className="ms-3 btn btn-success px-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteData(item.id)}
                    className="btn btn-danger "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
