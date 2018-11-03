import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import GoogleMapsLoader from "./util/GoogleMapsLoader";

class App extends Component {
  constructor(props) {
    super(props);
    this.googleMapsLoaded = this.googleMapsLoaded.bind(this);
  }

  googleMapsLoaded() {
    console.log("loaded", this);
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.5452, lng: -78.5389},
      zoom: 9
    });

    const bounds = {
      north: 44.599,
      south: 44.490,
      east: -78.443,
      west: -78.649
    };

    // Define a rectangle and set its editable property to true.
    const rectangle = new window.google.maps.Rectangle({
      bounds: bounds,
      editable: true
    });
    rectangle.setMap(map);
  }

  componentDidMount() {
    GoogleMapsLoader.loadScript(this.googleMapsLoaded);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />
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
          </a>*/}
          <div id="map">Maps</div>
        </header>
      </div>
    );
  }
}

export default App;
