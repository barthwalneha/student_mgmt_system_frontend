import React from "react";
import { LOGO } from "../utils/constants";
const Header = () => {
  return (
    <div className="position-absolute z-3 top-0 start-0 m-0 ">
      <img
        style={{
          width: "150px",
          height: "150px",
        }}
        src={LOGO}
        alt="logo"
      />
    </div>
  );
};

export default Header;
