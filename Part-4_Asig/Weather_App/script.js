/* 
PROBLEM 2 — Weather Dashboard
Difficulty: ⭐⭐⭐

Build a small Weather Dashboard using an API.

Use the browser's:

fetch()

You should search for a suitable public weather API and use its API response.

Create:

getWeather(city)

Flow:

User enters city
       ↓
fetch()
       ↓
HTTP request
       ↓
JSON response
       ↓
Display weather

Display:

City
Temperature
Humidity
Wind Speed
Weather Condition
Requirements

Use:

fetch()

with:

async/await

Handle:

Network error
Invalid city
HTTP error
Invalid response

Remember:

fetch()

doesn't automatically reject just because the server returns 404 or 500.

Check:

response.ok
Must practice
Fetch API
HTTP
GET request
Response
response.ok
JSON
async/await
try/catch
Promise
API error handling
 */
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");
const errorDiv = document.getElementById("error");

async function getWeather(city) {
    try {
        weatherDiv.innerHTML = "";
        errorDiv.innerHTML = "";

        if (!city.trim()) {
            throw new Error("Please enter a city.");
        }

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        if (!locationResponse.ok) {
            throw new Error("HTTP error while finding city.");
        }

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            throw new Error("Invalid city. City not found.");
        }

        const location = locationData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
        );

        if (!weatherResponse.ok) {
            throw new Error("HTTP error while getting weather.");
        }

        const weatherData = await weatherResponse.json();

        if (!weatherData.current) {
            throw new Error("Invalid weather response.");
        }

        const current = weatherData.current;

        weatherDiv.innerHTML = `
            <h2>${location.name}</h2>
            <p>Temperature: ${current.temperature_2m} °C</p>
            <p>Humidity: ${current.relative_humidity_2m}%</p>
            <p>Wind Speed: ${current.wind_speed_10m} km/h</p>
            <p>Weather Condition: ${getWeatherCondition(current.weather_code)}</p>
        `;

    } catch (error) {
        errorDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

function getWeatherCondition(code) {
    if (code === 0) {
        return "Clear Sky";
    }

    if ([1, 2, 3].includes(code)) {
        return "Cloudy";
    }

    if ([45, 48].includes(code)) {
        return "Fog";
    }

    if ([51, 53, 55, 56, 57].includes(code)) {
        return "Drizzle";
    }

    if ([61, 63, 65, 66, 67].includes(code)) {
        return "Rain";
    }

    if ([71, 73, 75, 77].includes(code)) {
        return "Snow";
    }

    if ([80, 81, 82].includes(code)) {
        return "Rain Showers";
    }

    if ([95, 96, 99].includes(code)) {
        return "Thunderstorm";
    }

    return "Unknown";
}

searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value);
});

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeather(cityInput.value);
    }
});

