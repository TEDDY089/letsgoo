import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-left">
            <a className="navbar-brand">Letsgo</a>

            <div className="nav-links">
              <a href="#" className="nav-link">
                Home
              </a>

              <a href="#" className="nav-link">
                Quiz
              </a>

              <a href="#" className="nav-link">
                About
              </a>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
