import React, { Component } from 'react';
import './rectangle.css';
export default class Rectangle extends Component {
  state = {
    coord_x: this.props.coord_x,
    coord_y: this.props.coord_y,
    color: this.props.color
  };
  render() {
    return (
      <div
        className="rectangle"
        onClick={this.props.onRectClick}
        style={{
          left: this.state.coord_x,
          top: this.state.coord_y,
          backgroundColor: this.state.color
        }}
      />
    );
  }
}
