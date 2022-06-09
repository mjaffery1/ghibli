import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <div>
            <h2> Home</h2>
          </div>
        </Link>
        <div>
          <a href="https://www.ghiblifest.com/">
            {" "}
            Watch Studio Ghibli in Theaters!{" "}
          </a>
        </div>
        <Link to={`/FunFacts`}>
          <div>
            <h2>Fun Facts</h2>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
