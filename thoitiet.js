const apiKey = 'b9cdbf759a6cb247e1b952064ad085e9'; // Replace with your actual API key

// Function to fetch weather data
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=21.027&lon=105.8342&units=metric&appid=b9cdbf759a6cb247e1b952064ad085e9&lang=vi`;

    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update HTML with weather data
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;

        document.getElementById('feels').textContent = `Cảm giác như ${Math.round(data.main.feels_like)}°C`;

        document.getElementById('min-temperature').textContent = `Thấp ${Math.round(data.main.temp_min)}°C`;

        document.getElementById('max-temperature').textContent = `Cao ${Math.round(data.main.temp_max )}°C`;

        document.getElementById('humidity').textContent = `Độ ẩm: ${data.main.humidity}%`;

        document.getElementById('wind').textContent = `Gió: ${data.wind.speed}km/h`;

        document.getElementById('description').textContent = `Trời ${data.weather[0].description}`;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/10d@2x.png`;
        document.getElementById('weather-icon').setAttribute('src', iconUrl);
        
    } catch (error) {
        console.log('Error:', error);
    }
}

// Call the function with a desired city
getWeatherData('HaNoi');


var modal = document.getElementById("feedback-modal");

        // Get the button that opens the modal
        var btn = document.getElementById("open-feedback-button");

        // Get the element to close the modal
        var closeBtn = document.getElementById("close-feedback");

        // When the user clicks on the button, open the modal
        btn.addEventListener("click", function() {
            modal.style.display = "block";
        });

        // When the user clicks on (x) or outside the modal, close it
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

