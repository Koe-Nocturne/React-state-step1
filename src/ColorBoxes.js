import React from 'react';
import './App.css';

class ColorBoxes extends React.Component {
  render(){
    return(
    <div style={{backgroundColor: this.props.color, width: "30vw", height: "30vh"}}>
    </div>)
  };
}

export default ColorBoxes;
