import React from "react";

const Navbar = () => {
  return (
    <nav class=" px-5 d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light">
      <h1 style={{ fontSize: "3.3rem", fontWeight: 200 }}>Avon</h1>
      <div className="d-flex align-items-center">
        <span>Sign In</span>
        <img
          className="mx-4"
          src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"
          height={30}
          width={30}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
          height={30}
          width={30}
        />
      </div>
    </nav>
  );
};

export default Navbar;
