import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image } from 'react-bootstrap';
import Weather from './modules/Weather.js';
import Movie from './modules/Movie.js';

let SERVER_API = process.env.REACT_APP_API_URL;
console.log(SERVER_API);
let API_KEY = process.env.REACT_APP_LOCATION_KEY;


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        city: "",
        cityData: {},
        error: false,
        errorMessage: "",
        lat: "",
        lon: "",
        areaMap: "",
    };
  }
  
  submitCityHandler = async (event) => {
      event.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.city}& format=json`
      let cityInfo = await axios.get(url);
      this.setState({
        cityData: cityInfo.data[0],
        error: false,
        areaMap: `https://maps.locationiq.com/v3/staticmap/search?key=${API_KEY}&center=${cityInfo.data[0].lat},${cityInfo.data[0].lon}&zoom=10`
      }); 
    } catch (error){
      this.setState({
        error: true,
        errorMessage: `Oh No! There has been an error: ${error.response.status}`,
      });
    }
  };
    
handleCityInput = (event) => {
  this.setState({
    city: event.target.value,
  });
};

  render(){
    return (
      <>
      <h1>Adventure Time!</h1>
        <form id = "form" onSubmit={this.submitCityHandler}>
        <label>
        {" "}
        <p>Where to?</p>
        <input type= "text" onInput = {this.handleCityInput} />
        </label>
      <button type = "submit">All you want to know!</button>
    </form>
    <div>
      <Card>{this.state.errorMessage}</Card>
      <Card>{this.state.cityData.display_name}</Card>
      <Card>{this.state.cityData.lat}</Card>
      <Card>{this.state.cityData.lon}</Card>
      </div>
      <Image src= {this.state.areaMap} />
    </>
    );
  }
}

export default App;

