import React, { Component } from 'react';
import './circle.css';

export default class Circle extends Component {
  state = {
    coord_x: this.props.coord_x,
    coord_y: this.props.coord_y,
    color: this.props.color,
  
  };

  render() {
  
    return (
      <>
        <div
          className="circle"
         onClick={this.props.onCircleClick}
          style={{ 
            left: this.props.coord_x + 'px',
            top: this.props.coord_y + 'px',
            backgroundColor: this.props.color
          }}
        />
     
      </>
    );
  }
}
