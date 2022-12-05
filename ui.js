class UI {
    constructor() {
        this.city = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.temp = document.getElementById("w-temp");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon").src = `https://openweathermap.org/img/w/04n.png`;
        this.humidity = document.getElementById("w-humidity");
        this.wind = document.getElementById("w-wind");
        this.visibility = document.getElementById("w-visibility")
        this.pressure = document.getElementById("w-pressure");



    }

    paint(weather) {
        this.city.textContent = `${weather.name}, ${weather.sys.country}`;

        this.icon = ` ${weather.weather[0].icon} `;
        this.temp.textContent = `Temperature: ${weather.main.temp}°C`;
        this.desc.textContent = `Feels Like ${weather.main.feels_like}°C. ${weather.weather[0].description}. ${weather.weather[0].main}`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s NNE`;
        this.visibility.textContent = `Visibility: ${weather.visibility}km`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;

    }
}

// const { name } = data;
// const { icon, description } = data.weather[0];
// const { temp, humidity } = data.main;
// const { speed } = data.wind;
// document.querySelector(".city").innerText = "Weather in " + name;
// document.querySelector(".icon").src =
//     "https://openweathermap.org/img/wn/" + icon + ".png";
// document.querySelector(".description").innerText = description;
// document.querySelector(".temp").innerText = temp + "°C";
// document.querySelector(".humidity").innerText =
//     "Humidity: " + humidity + "%";
// document.querySelector(".wind").innerText =
//     "Wind speed: " + speed + " km/h";