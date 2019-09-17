import React from 'react';
import './App.css';
import BoxContainer from './BoxContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ["red", "white", "purple", "olive", "green", "maroon", "navy", "silver", "aqua", "lime", "teal", "fuchsia", "blue", "yellow", "red", "gray"];
    this.state = { colors: this.generate() };
  };
  generate() {
    let colorsArr = Array.from({ length: this.colors.length })
    let colorValArr = colorsArr.map(
          n => Math.floor(Math.random() * this.colors.length));
    return colorValArr;
  }
  
  render() {
    return (
      <div>
        {this.state.colors.map(n => <BoxContainer color={this.colors[n]} />)}
      </div>
      );  
  }
}

export default App;
