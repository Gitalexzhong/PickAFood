import logo from '../logo.svg';
import '../App.css';
// import React, { Component }  from 'react';
import React from 'react'

function sayHello() {
  alert('You clicked me!');
}

function Yes() {
  // return (
  //   <div className="App">
  //     <header>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
  <div className="App">
      {/* <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button onClick={sayHello}>Default</button>;
    </div>
  )
}

export default Yes;