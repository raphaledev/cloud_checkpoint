import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import './App.css'
import Formules from './components/Formules';
import Contact from './components/Contact';

const style = {
  width: '800px',
  height: '400px',
  margin: '20px auto',
  borderRadius: '10px'
}

class App extends Component {
  render() {
  return (
    <div className="App">
      <Formules/>
      <Contact/>
      <Map 
      google={this.props.google} 
      zoom={17}
      initialCenter={{
        lat: 14.428745,
        lng: -16.978639
      }}
      style={style}>
      <Marker/>
      </Map> 
    
    </div>
  );
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.API_KEY)
})(App);