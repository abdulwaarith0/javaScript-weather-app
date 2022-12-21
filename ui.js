class UI {
    constructor() {
        this.city = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.temp = document.getElementById("w-temp");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.wind = document.getElementById("w-wind");
        this.visibility = document.getElementById("w-visibility")
        this.pressure = document.getElementById("w-pressure");



    }

    paint(weather) {
        this.city.textContent = `${weather.name}, ${weather.sys.country}`;

        this.temp.textContent = `Temperature: ${weather.main.temp}°C`;
        this.icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png `;

        this.desc.textContent = `Feels Like ${weather.main.feels_like}°C. ${weather.weather[0].description}. ${weather.weather[0].main}`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s NNE`;
        this.visibility.textContent = `Visibility: ${weather.visibility}km`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;

    }
}

