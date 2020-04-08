import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img
          className="Header--logo"
          src="https://upload.wikimedia.org/wikipedia/fr/3/35/Allocin%C3%A9_Logo.svg"
          alt="logo"
        />
      </header>
    );
  }
}
