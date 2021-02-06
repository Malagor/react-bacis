import './App.css';
import React, {Component} from 'react'
import {default as Cat} from "./Cat/Cat";

class App extends Component {
  render() {
    const divStyle = {
      'fontSize': '2rem'
    };

    const catList = {
      display: 'flex',
      maxWidth: '900px',
      justifyContent: 'space-between',
      margin: 'auto'
    };

    return (
      <div className={'App'} style={divStyle}>
        <h1>My Cats</h1>
        <div style={catList}>
          <Cat name={"Bars"} age='10' color='white'>
            <p  style={{color: 'green'}}>My favorite cat</p>
          </Cat>
          <Cat name={"Demon"} age='3' color={'red'}>
            <p  style={{color: 'blue'}}>My favorite cat</p>
          </Cat>
          <Cat name={'Black'} age={7} color={'black'}/>
        </div>
      </div>
    );
  }
}


export default App;
