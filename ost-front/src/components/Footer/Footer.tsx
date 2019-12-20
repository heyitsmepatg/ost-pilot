import React, { Component } from "react";
import "./Footer.css";

interface IFooterProps {
  className?: string
}

interface IFooterState {

}


export default class Footer extends Component<IFooterProps, IFooterState> {
  render() {
    const classes = this.props.className
      ? `footer ${this.props.className}`
      : `footer`;

    return (
      <footer className={classes} role="contentinfo">
        <div className="container">
          <span>Contact us</span>
          <span>Mission</span>
          <span>Site index</span>
        </div>
      </footer>
    );
  }
}
