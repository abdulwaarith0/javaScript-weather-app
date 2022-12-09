const weather = new Weather("Lagos", "NG");

const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change weather event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#state").value;


    weather.changeLocation(`${city}`, `${state}`);

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

