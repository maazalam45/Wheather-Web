const apiKey = "bdb4a8330171d50b035b982f1f171158";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.getElementById("inp");
const button = document.querySelector(".btn");
const form = document.getElementById("weatherForm"); // Reference the form

async function checkWeather(city) {
    document.querySelector("#City").innerHTML = "Loading...";
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    if (data.cod >= 400) {
        document.querySelector("#City").innerHTML = "Error";
        document.querySelector("#Temperature").innerHTML = "--";
        document.querySelector("#Wind").innerHTML = "--";
        document.querySelector("#Humidity").innerHTML = "--";
        document.querySelector("#error").innerHTML = "City not found. Please try again.";
        document.querySelector("#error").classList.remove("hidden");
    } else {
        document.querySelector("#City").innerHTML = data.name;
        document.querySelector("#Temperature").innerHTML = data.main.temp + "°C";
        document.querySelector("#Wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector("#Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".display").classList.remove("hidden");
        document.querySelector("#error").classList.add("hidden");
    }
}

// Add event listener to the form
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    checkWeather(searchBox.value); // Call the function with the input value
});
