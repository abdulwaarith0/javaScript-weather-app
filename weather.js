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


