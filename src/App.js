import React from 'react';

import Header from './Components/Header'
import Input from './Components/Input'
import Weather from './Components/Weather'
import classes from './App.css'

const API_KEY = "10ecf59a9703d421fe8f737af9b232da";

class App extends React.Component {

  state = {

    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    className: "wrapper"

  }

  retrieveWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault(); //prevents the page from fully refreshing
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`); //makes api call
    const data = await api_call.json(); // puts data in JSON format
    console.log(data);

    if(city && country){

    this.setState({
      temp: Math.floor(data.main.temp),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      main:data.weather[0].main,
      error: "",
      className:data.weather[0].main

      
    });

     }
  else {
    this.setState({
      city: undefined,
      country: undefined,
      temp: undefined,
      humidity: undefined,
      description: undefined,
      main: undefined,
      error: "Please fill out the form"
    });
    }
  }

   render() {
    return (
      <div>
        <div className="wrapper">

            <Header /> 

                  <Input retrieveWeather={this.retrieveWeather} />
                  <div className="edges">
                  <div className={this.state.main}>
                  <Weather 
                    temp={this.state.temp} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    main={this.state.main}
                    error={this.state.error}
                  />    
                  </div>
                  </div>  
                  </div>    
      </div>
    );
  }
};

export default App;