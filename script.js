async function getWeather() {
    let city = document.getElementById("cityInput").value;
    if(city === "") {
        document.getElementById("weatherResult").innerHTML = "Please enter a city name.";
        return;
    }

    let apikey = "ccbd6014c75357e68f2952419106612b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weatherResult").innerHTML =
                `Temperature: ${data.main.temp} °C<br> Condition: ${data.weather[0].description}`;
        } else {
            console.error("API Error:", data);
            document.getElementById("weatherResult").innerHTML = "City not Found";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
    }
}
