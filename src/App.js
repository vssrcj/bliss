import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cont">
          <input placeholder="Search..." />
          <i class="material-icons">search</i>
        </div>
        <table>
          <tbody>
            {Array(100).fill().map((a, i) => (
              <tr key={i}>
                <td><i class="material-icons">check_box_outline_blank</i></td>
                <td>{i+1}</td>
                <td>Some random data blbl</td>
                <td>1 Dec 2018</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
