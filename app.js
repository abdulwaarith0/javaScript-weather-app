// Init localStorage
const storage = new Storages();
// Get weather location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init ui
const ui = new UI();


// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change weather event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;


    // Change location
    weather.changeLocation(`${city}`, `${state}`);

    //Set location in LS
    storage.setLocationData(`${city}`, `${state}`);

    // Get and display weather
    getWeather();

    // close modal
    $("#locModal").modal("hide");

});


function getWeather() {
    weather.getWeather()
        .then((results) => {

            ui.paint(results);
            console.log(results)

        })
        .catch(err => console.log(err));

};

