const apiKey = 'b9cdbf759a6cb247e1b952064ad085e9'; // Replace with your actual API key

// Function to fetch weather data
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=21.0278&lon=105.8342&appid=b9cdbf759a6cb247e1b952064ad085e9&lang=vi`;

    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update HTML with weather data
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp - 273.15)}°C`;

        const minTemperature = `${Math.round(data.main.temp_min - 273.15)}°C`;
        document.getElementById('min-temperature').textContent = `Thấp: ${minTemperature}`;

        const maxTemperature = `${Math.round(data.main.temp_max - 273.15)}°C`;
        document.getElementById('max-temperature').textContent = `Cao: ${maxTemperature}`;

        document.getElementById('humidity').textContent = `Độ ẩm: ${data.main.humidity}%`;

        document.getElementById('description').textContent = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/10d@2x.png`;
        document.getElementById('weather-icon').setAttribute('src', iconUrl);
        
    } catch (error) {
        console.log('Error:', error);
    }
}

// Call the function with a desired city
getWeatherData('HaNoi');


