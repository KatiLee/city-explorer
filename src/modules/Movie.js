import React from "react";
import axios from "axios";
import { ListGroup, Alert } from "react-bootstrap";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            movieCity: "",
            error: false,
            errorMessage: "",
        };
    }
    reqMovie = async (cityName) => {
        try {
            let getMovie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`,
            {params: 
            {cityname: cityName,
            }}
            );
            this.setState({
                movie: getMovie.data,
                error: false,
                movieCity: cityName,
            });
        } catch (error) {
            this.setState({
                error: true, 
                errorMessage: `Oh no! We have run into an error: ${error.res.status}`,
            });
            console.log('movie error: ', error);
        }
    };
    render(){
        return(
            <>
            {(this.state.error) &&
            <Alert key= 'warning' variant= 'warning' show= "true" transition= "false">Sorry, there is no movie info for {this.props.cityName} error {this.state.errorMessage}</Alert>
            }
            <ListGroup variant= "primary">
                <div>
                    {this.state.movie !== {} &&
                    this.state.movie.map((item, id) => {
                        return (<ListGroup.Item key={id}>{"Title " + item.title + "Overview: " + item.overview}</ListGroup.Item>);
                    })}
                </div>
            </ListGroup>
            </>
        );
    }
}
export default Movie;