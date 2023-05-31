import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#c4cfdc" }}>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <h4 style={{ color: "orange" }}>Oohr Innovations</h4>
          <p className="nav-link p-0 text-blue">© 2023</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5 style={{ color: "orange" }}>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-blue">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Features
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Pricing
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 style={{ color: "orange" }}>Admin Panel</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/uploadnewbook" className="nav-link p-0 text-blue">
                Update new books
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Track order
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-blue">
                Manage stores
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
