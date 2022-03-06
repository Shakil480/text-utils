import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const colorBtn = {
    display: props.mode === "light" ? "none" : "block",
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-${
        props.mode === "light" ? "primary" : "dark"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutTitle}
              </Link>
            </li>
          </ul>
          <div style={colorBtn}>
            <button
              onClick={() => props.handleBgColor("#0f2c35")}
              type="button"
              className="btn btn-info rounded-circle mx-1"
              style={{ height: "30px", width: "30px" }}
            ></button>
            <button
              onClick={() => props.handleBgColor("#26270d")}
              type="button"
              className="btn btn-warning rounded-circle mx-1"
              style={{ height: "30px", width: "30px" }}
            ></button>
            <button
              onClick={() => props.handleBgColor("#2d120e")}
              type="button"
              className="btn btn-danger rounded-circle mx-1"
              style={{ height: "30px", width: "30px" }}
            ></button>
            <button
              onClick={() => props.handleBgColor("#0a1611")}
              type="button"
              className="btn btn-success rounded-circle mx-1"
              style={{ height: "30px", width: "30px" }}
            ></button>
          </div>
          <div className="form-check form-switch">
            <input
              style={{ cursor: "pointer" }}
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-white`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
