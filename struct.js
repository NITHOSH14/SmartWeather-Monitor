document.addEventListener("DOMContentLoaded", function () { 
    async function getWeather() {
        const city = document.getElementById("cityInput").value.trim();
        const apiKey = "01343783ad59a27088a3380a7b9ccc86"; 

         cityInput.addEventListener("keydown", function(event){
             if(event.key==="Enter"){
                 event.preventDefault();
                 getweather();
             }
         });

            async function getWeather() {
        const city = cityInput.value.trim();
        const apiKey = "01343783ad59a27088a3380a7b9ccc86";
                
        const cityRegex = /^[A-Za-z\s]+$/;

        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        if (!cityRegex.test(city)) {
            alert("Invalid input! Please enter a valid city name.");
            return;
        }

        const checkUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        try {
            const checkResponse = await fetch(checkUrl);
            const checkData = await checkResponse.json();

            if (checkData.cod !== 200) {
                alert("Invalid city! Please enter a valid city name.");
                return;
            }

    
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();

            // Update the weather details on the page
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
