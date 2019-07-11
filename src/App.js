import React, { Component } from 'react';
export default class App extends Component {
  state = {
    durum: 0,
    koordinatx: 0,
    koordinaty: 0,
    color:0,
  };
  rastegelesekil = () => {
    let sayi;
    let mycolor;
    sayi = Math.random() > 0.5 ? 1 : 0;
    this.setState({ durum: sayi });
    this.rastegelekordinat();
    mycolor= this.rastgelerenk();
    this.setState({color:mycolor});
  };
  rastegelekordinat = () => {
    let x;
    let y;
    x = Math.floor(Math.random() * 1200 + 1);
    y = Math.floor(Math.random() * 600 + 1);
    this.setState({ koordinatx: x });
    this.setState({ koordinaty: y });
  };
  rastgelerenk = () => {
    let renk1, renk2, renk3;
    renk1 = Math.floor(Math.random() * 255 + 1);
    renk2 = Math.floor(Math.random() * 255 + 1);
    renk3 = Math.floor(Math.random() * 255 + 1);
    return 'rgb(' + renk1 + ',' + renk2 + ',' + renk3 + ')' 

  };

  render() {
    return (
      <>
        <button className="button" onClick={this.rastegelesekil}>
          Tıklayın
        </button>
        {this.state.durum === 0 ? (
          <div
            className="kutu"
            style={{
              left: this.state.koordinatx + 'px',
              top: this.state.koordinaty + 'px',
              backgroundColor: this.state.color,
            }}
          />
        ) : (
          <div
            className="circle"
            style={{
              left: this.state.koordinatxpx +'px',
              top: this.state.koordinatypx +'px',
              backgroundColor: this.state.color,
            }}
          />
        )}
      </>
    );
  }
}
