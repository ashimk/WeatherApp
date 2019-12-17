import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5cfb27661a39eee755aaf62d492bf507";

class App extends React.Component {
  state = {

    max_temperature: undefined,
    min_temperature:undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
      max_temperature: data.main.temp_max,
      min_temperature:data.main.temp_min,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: undefined
      });
    } else {
      this.setState({
        max_temperature: undefined,
        min_temperature:undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                 <Titles/>
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    max_temperature={this.state.max_temperature}  
                    min_temperature={this.state.min_temperature} 
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
          
          </div>
        </div>
      </div>
    );
  }
};

export default App;
