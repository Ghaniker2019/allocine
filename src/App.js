import React, { Component } from "react";
import Movie from "./Movie";
import Header from "./Header";

import "./style/Style.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movie />
      </div>
    );
  }
}
