const weather = new Weather("Lagos", "NG");

const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);


function getWeather() {
    weather.getWeather() 
        .then((results) => {

            ui.paint(results);
            console.log(results)

        })
        .catch(err => console.log(err));
        
        // .then(results => {
        //         if (results === "Not Found") {
        //             // show alert
        //             Alert("Weather  not found", "alert alert-danger");
                    
        //         } else {
        //             // show weather 
        //             ui.paint(results);
        //             console.log(results);
        //         }
        //     });
            
};

