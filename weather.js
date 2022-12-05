class Weather {
    constructor(city, state) {
        this.apiKey = "a481e2b85226510d8232ff8dfa0228cf",
            this.city = city,
            this.state = state;
    }

    async getWeather() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`)

        const responseData = await response.json();


        return responseData;

    }

    // change weather location
    changeLocation(city, state) {
        this.city = city,
            this.state = state;
    }

}


// city = { weather.name }
// country = { weather.sys.country }
// date = { weather.dt }
// humidity = { weather.main.humidity }
// description = { weather.weather[0].description }
// icon = { weather.weather[0].icon }
// temp = { weather.main.temp }o
// temp_max = { weather.main.temp_max }
// temp_min = { weather.main.temp_min }




//     let weather = {
//   apiKey: "a481e2b85226510d8232ff8dfa0228cf",
//   fetchWeather: function (city) {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}
//         &units=metric&appid=
//         ${this.apiKey}`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           alert("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return response.json();
//       })
//       .then((data) => this.displayWeather(data));

//   };

//   displayWeather(data) {
//     this.setState({
//       weather: data,
//       loading: false,
//     });
//   },

//   render() {
//     const { weather, loading } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Weather App</h1>
//         </header>
//         <main>
//           <SearchForm onSearch={this.performSearch} />
//           {loading && <p>Loading weather...</p>}
//           {weather && (
//             <weather
//               city={weather.name}
//               country={weather.sys.country}
//               date={weather.dt}
//               humidity={weather.main.humidity}
//               description={weather.weather[0].description}
//               icon={weather.weather[0].icon}
//               temp={weather.main.temp}
//               temp_max={weather.main.temp_max}
//               temp_min={weather.main.temp_min}
//             />
//           )}
//         </main>
//       </div>




