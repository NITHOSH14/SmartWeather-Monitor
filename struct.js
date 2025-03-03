document.addEventListener("DOMContentLoaded", function () { 
    async function getWeather() {
        const city = document.getElementById("cityInput").value.trim();
        const apiKey = "01343783ad59a27088a3380a7b9ccc86"; // Your API Key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data); // Log API response for debugging

            if (data.cod !== 200) {  // If API returns an error
                alert(`Error: ${data.message}`);
                return;
            }

            // Update the correct elements
            document.getElementById("cityName").innerText = `Weather in ${data.name}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("weatherCondition").innerText = `Description: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("windSpeed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Something went wrong. Please check your internet connection and try again.");
        }
    }

    window.getWeather = getWeather; // Ensure function is available globally
});
