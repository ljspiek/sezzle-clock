import React, { Component } from "react";
import Clock from "react-live-clock";

export default class Time extends Component {
  render() {
    return (
      <div>
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </div>
    );
  }
}
