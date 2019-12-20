import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./HeaderBar.css";

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="site-header">
        <div className="container">
          <div id="header-content">
            <span>
              <Link to="/home" className="align--left">
                Home
              </Link>
            </span>
            <span className="align--right">
              <ul>
                <li>
                  <Link to="#">Employee Log In</Link>
                </li>
                <li>
                  <Link to="#">Citizen Log In</Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
