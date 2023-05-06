import React from "react";
import axios from "axios";
import { ListGroup, Alert } from "react-bootstrap";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            weatherCity: "",
            error: false,
            errorMessage: "",
        };
    }
    requestWeather = async (lat, lon, cityName) => {
        try {
            let getWeather = await axios.get (`${process.env.REACT_APP_API_URL}/weather`,
            {params: 
            { cityname: cityName,
              cityLon: lon,
              cityLat: lat,
            }});

            this.setState({
                weather: getWeather.data,
                error: false,
                weatherCity: cityName,
            });
        } catch (error) {
            this.setState({
                error: true,
                errorMessage: `Oh no! We have run into an error: ${error.res.status}`, 
            });
            console.log('weather error: ', error)
        }
    };

    render(){
        return (
            <>
            {(this.state.error) && 
            <Alert key= 'warning' variant='warning' show= "true" transition= "false">Sorry, there is no movie info for {this.props.cityName} error {this.state.errorMessage} </Alert>
            }
            <ListGroup variant= "primary">
                <div>
                    {this.state.weather !== {} && 
                    this.state.weather.map((item, id) => {
                        return (<ListGroup.Item key= {id}> {"Today, " + item.date + " the weather will be " + item.description}</ListGroup.Item>);
                    })}
                </div>
            </ListGroup>
            </>
        );
    }
}
export default Weather;