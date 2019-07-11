import React, { Component } from 'react';
import Circle from './components/Circle';
import Rectangle from './components/Rectangle';
export default class App extends Component {
  state = {
    durum: 0,
    color: 0,
    shapes: []
  };

  rastegelesekil = () => {
    const coord_x = this.rastegelekordinatx();
    const coord_y = this.rastegelekordinaty();
    const color = this.randomcolor();
    const type = Math.random() > 0.5 ? 'circle' : 'rectangle';
    const shape = {
      type: type,
      color: color,
      coord_x: coord_x,
      coord_y: coord_y
    };

    const old_shapes = this.state.shapes;
    const shapes = [...old_shapes, shape];
    this.setState({ shapes });
  };
  rastegelekordinatx = () => {
    return Math.floor(Math.random() * 1200 + 1);
  };
  rastegelekordinaty = () => {
    const y = Math.floor(Math.random() * 700 + 1);
    return y;
  };

  randomcolor = () => {
    let renk1, renk2, renk3;
    renk1 = Math.floor(Math.random() * 255 + 1);
    renk2 = Math.floor(Math.random() * 255 + 1);
    renk3 = Math.floor(Math.random() * 255 + 1);
    return 'rgb(' + renk1 + ',' + renk2 + ',' + renk3 + ')';
  };

  render() {
    const { shapes } = this.state;
    const draw = shapes.map((shape, index) => {
      if (shape.type === 'circle') {
        return (
          <Circle
            key={index}
            coord_x={shape.coord_x}
            coord_y={shape.coord_y}
            color={shape.color}
          />
        );
      } else {
        return (
          <Rectangle
            key={index}
            coord_x={shape.coord_x}
            coord_y={shape.coord_y}
            color={shape.color}
          />
        );
      }
    });

    return (
      <>
        <button className="button" onClick={this.rastegelesekil}>
          Tıklayın
        </button>
        {draw}
      </>
    );
  }
}
