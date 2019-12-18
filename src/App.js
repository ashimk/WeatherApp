import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Titles from "./components/Titles";
import Form from "./components/Form";

import RenderAll from "./components/RenderAll";

const API_KEY = "5cfb27661a39eee755aaf62d492bf507";

class App extends React.Component {
  state = {
    forecast : []
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        forecast:data.list
      });
    } 
  }

  

  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="container">
              <div className="row">
                
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <div>
                    <RenderAll forecast = {this.state.forecast} />
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    );
  }
};

export default App;
