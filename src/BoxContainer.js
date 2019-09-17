import React from 'react';
import ColorBoxes from './ColorBoxes';
import './App.css';

class BoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ["red", "white", "purple", "olive", "green", "maroon", "navy", "silver", "aqua", "lime", "teal", "fuchsia", "blue", "yellow", "red", "gray"];
    this.handleClick = this.handleClick.bind(this);
    this.state = {color: this.props.color};
  };
  changeColor() {
    let colorIndex = Math.floor(Math.random() * 16);
    return this.colors[colorIndex];
  };
  handleClick() {
    let newColor = this.changeColor();
    this.setState(clr => {
      let {color} = clr;
      let newererColor = { color: newColor};
      return {...newererColor};
    });
  };

  render() {
    return (
      <div>
        <ColorBoxes color={this.state.color} />
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  };
};

export default BoxContainer;