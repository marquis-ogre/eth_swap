
import React from 'react';
import logo from '../images/pythonex-logo.png'

const Navbar = ({ account }) => (
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a
      className="navbar-brand col-sm-3 col-md-2 mr-0"
      href="https://pythonex.net"
      target="_blank"
      rel="noopener noreferrer">
      <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-center"
        alt="" />
      &nbsp; Python Swap Exchange
    </a>
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
        <small className="text-secondary">
          <small id="account">
            {account}
          </small>
        </small>
      </li>
    </ul>
  </nav>
);

export default Navbar;
