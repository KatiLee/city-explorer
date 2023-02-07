import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cityInfo: [],
    }
  }
  
  handleSubmit = async (event) => {
      event.preventDefault();

      let cityInfoQuery = await axios.get("https://us1.locationiq.com/v1/search.php");
  }

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