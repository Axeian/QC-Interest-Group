import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md fixed-top py-1">
        <div className="container">
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
          >
            <i className="fa fa-bars"></i>
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  to="/"
                  className="nav-link text-uppercase font-weight-bold "
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link text-uppercase font-weight-bold "
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
