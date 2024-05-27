const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "65340e062298a0097ab93f68d35ca619";

$(document).ready(function () {
  weatherFn("Kanpur");
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        console.log(data)
    if (res.ok) {
      weatherShowFn(data);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function weatherShowFn(data) {
    $("#city-name").text(data.name);
    $("#date").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $("#temperature").html(`${data.main.temp}°C`);
    $("#description").text(data.weather[0].description);
    $("#wind-speed").html(`Wind Speed: ${data.wind.speed} m/s`);
    $("#weather-info").fadeIn();
    const weatherIcon = document.getElementById("weather-icon");
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    }
    else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "./images/haze.png";
    } else {
      weatherIcon.src = "./images/snow.png";
    }
}