import Login from "./forms/Login";
import Registration from "./forms/Registration";
import Add from "./api/Add";
import Details from "./api/Details";
import Edit from "./api/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/all" element={<Details />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:studentId" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
