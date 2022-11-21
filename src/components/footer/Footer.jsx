import React from "react";
import { NavLink } from "react-router-dom";
// import { SlSocialFacebook } from "react-icons/si";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                alt=""
                width="180"
                className="mb-3"
              />
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <FaFacebookSquare />
                </li>
                <li className="list-inline-item">
                  <FaInstagram />
                </li>
                <li className="list-inline-item">
                  <FaYoutube />
                </li>
                <li className="list-inline-item">
                  <FaLinkedinIn />
                </li>
                <li className="list-inline-item">
                  <FaPinterest />
                </li>
                <li className="list-inline-item">
                  <FaTelegram />
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <NavLink className="text-muted">For Women</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted">For Men</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted">Stores</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted">Our Blog</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <NavLink className="text-muted">Login</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted">Register</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted">Wishlist</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted">Our Products</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © 2022 ecommorce All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
