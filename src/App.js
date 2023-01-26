import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cityInfo: [],
    }
  }
  
  handleSubmit = (event) => {
      event.preventDefault();
  }
  render(){
    
    
    return(
    <>
    <h1>City Info From LocationIQ</h1>

    <form onSubmit={this.handleSubmit}>
      <button type = "submit">Display City Info</button>
    </form>
    </>;
    )
  }




}

export default App;