  
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  PropTypes from 'prop-types';
import ReactDom from 'react-dom';

class App extends Component {
  btnclick(){
    alert("button clicked...");
  }
  render() {
    var myStyle={fontsize:100,color:'#ff0000'}
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h3>Array: {this.props.propArray}</h3>
        <h3>Bool:{this.props.propBool?"True...":"False..."}</h3>
        <h3>Func:{this.props.propFunc(3)}</h3>
        <h3>Number:{this.props.propNumber}</h3>
        <h3>String:{this.props.propString}</h3>
        <h3>This is button</h3>
        <button onClick={this.btnclick}>Click here</button>
      </div>       
    );
  }
}
App.propTypes={
  name:PropTypes.string,
  propArray:PropTypes.array.isRequired,
  propBool:PropTypes.bool.isRequired,
  propFunc:PropTypes.number,
  propString:PropTypes.string,
};

App.defaultProps={
  name:'Tutorialpoint.com',
  propArray:[1,2,3,4,5,6],
  propBool:true,
  propFunc:function(e){return e},
  propNumber:1,
  propString:"String value..."
}

class Header extends Component
{
  render(){
    return(<div>
      <h2>Headers</h2>
      <p>This is header!!!</p>
    </div>)
  }
}
class Content extends Component
{
  render(){
    return(
      <div>
        <h2>Content</h2>
        <p>This is Content !!!</p>
      </div>
    )
  }  
}

export default App;