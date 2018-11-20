import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import GoogleMapsLoader from "./util/GoogleMapsLoader";

class App extends Component {
  constructor(props) {
    super(props);
    this.polygon = {};
    this.googleMapsLoaded = this.googleMapsLoaded.bind(this);
    this.toggleDraggable = this.toggleDraggable.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
  }

  googleMapsLoaded() {
    console.log("loaded", this);
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lng: 8.629650948685676, lat: 50.08116223910306},
      zoom: 18
    });

    /*const rs = {
      "id": "u32v4",
      "lat": 52.94786,
      "lng": 12.39535,
      "bounds": {
        "topLeftLat": 52.94786,
        "topLeftLng": 12.39535,
        "bottomRightLat": 52.94786,
        "bottomRightLng": 12.39535,
      }
    };


    const bounds = {
      north: 44.599,
      south: 44.490,
      east: -78.443,
      west: -78.649
    };*/

    const coords = [
      {lng: 8.629650948685676, lat: 50.08116223910306},
      {lng: 8.629671658685494, lat: 50.081074029102965},
      {lng: 8.629572198685212, lat: 50.08106470910294},
      {lng: 8.62957882868522, lat: 50.081035179102926},
      {lng: 8.629601258685181, lat: 50.08103741910297},
      {lng: 8.629617238685144, lat: 50.080970109102864},
      {lng: 8.629364698684299, lat: 50.08094527910298},
      {lng: 8.629123288683497, lat: 50.08092189910306},
      {lng: 8.6291077086835, lat: 50.08098818910321},
      {lng: 8.629199958683834, lat: 50.08099724910314},
      {lng: 8.629178848684061, lat: 50.08108606910335},
      {lng: 8.62925390868421, lat: 50.08109342910326},
      {lng: 8.629245948684373, lat: 50.081127919103324},
      {lng: 8.629516098685285, lat: 50.08115384910315},
      {lng: 8.62951713868525, lat: 50.08114938910319},
      {lng: 8.629650948685676, lat: 50.08116223910306}
    ];

    // Construct the polygon.
    this.polygon = new window.google.maps.Polygon({
      paths: coords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      editable: true
    });
    this.polygon.setMap(map);
/*
    // Define a rectangle and set its editable property to true.
    const rectangle = new window.google.maps.Rectangle({
      bounds: bounds,
      editable: true
    });
    rectangle.setMap(map);*/
  }

  componentDidMount() {
    GoogleMapsLoader.loadScript(this.googleMapsLoaded);
  }

  toggleDraggable() {
    const draggableState = this.polygon.getDraggable();
    return this.polygon.setDraggable(!draggableState);
  }


  toggleEditable() {
    const editableState = this.polygon.getEditable();
    return this.polygon.setEditable(!editableState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="button" onClick={this.toggleDraggable}>Toggle Shape Draggable</button>
          <button className="button" onClick={this.toggleEditable}>Toggle Shape Editable</button>
          <div id="map">Maps</div>
        </header>
      </div>
    );
  }
}

export default App;
