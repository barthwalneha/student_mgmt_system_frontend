import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

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

  // Filter RECORDS

  const [value, setValue] = useState("");
  const filterRecords = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/student?q=${value}`)
      .then((res) => {
        setData(res.data);
        setValue("");
      });
  };

  const reset = () => {
    fetch("http://localhost:3001/student", { method: "GET" })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
      });
  };

  // Sort records
  let options = ["name", "email", "course"];
  const [sort, setSort] = useState("");
  const sortRecord = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    setSort(value);
    await axios
      .get(`http://localhost:3001/student?_sort=${value}& _order=asc`)
      .then((res) => {
        setData(res.data);
        setValue("");
      });
  };

  return (
    <div>
      <h1 class="text-center fs-1 fw-bold text-primary mt-5 mb-3">
        Besant Technologies
      </h1>
      {/* FILTER RECORDS start */}
      <form onSubmit={filterRecords}>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          class="w-25 mx-3 my-2 "
          placeholder="Filter Records ......."
        ></input>
        <br />
        <button type="submit" class="btn btn-success mb-3 ms-3 ">
          Search
        </button>
        <button onClick={reset} type="reset" class="btn btn-success mb-3 ms-3 ">
          Reset
        </button>
      </form>

      {/* SORT  */}

      <select value={sort} onChange={sortRecord}>
        <option>Choose any one ....</option>
        {options.map((option) => (
          <option>{option} </option>
        ))}
      </select>
      <br />

      <Link to="/add">
        <button className="btn btn-warning w-2 mt-5 mb-2" type="button">
          Add New+
        </button>
      </Link>

      <div className="table-responsive ">
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
