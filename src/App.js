import React from 'react';
import axios from 'axios';

let API_KEY = process.env.REACT_APP_LOCATION_KEY;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cityInfo: [],
        city: "",
        cityData: {},
        error: false,
        errorMessage: "",
    };
  }
  
  handleSubmit = async (event) => {
      event.preventDefault();
    try {
      let cityInfoQuery = await axios.get("https://us1.locationiq.com/v1/search.php");
      this.setState({
        cityInfo: cityInfoQuery.data.results,
        error: false,
      });
    } catch (error){
      this.setState({
        error: true,
        errorMessage: `Oh No! There has been an error: ${error.response.status}`,
      });
    }
  };

  submitCityHandler = async(event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.city}&format=json`;
      console.log("does the url register?", url);
      let cityInfo = await axios.get(url);
      console.log("now does the city info work?", cityInfo.data[0]);

      this.setState({
        cityData: cityInfo.data[0],
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `Oh No! There has been an error: ${error.response.status}`,
      });
    }
  };

  render(){
    let adventureWeather = 
    
    return <>
    <h1>Adventure Time!</h1>

    <form onSubmit={this.handleSubmit}>
      <button type = "submit">Where To?</button>
    </form>
    </>;
    
  }




}

export default App;