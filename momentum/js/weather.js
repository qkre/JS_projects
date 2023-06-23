const API_KEY = '50ab51aceed286afa309142e8d70f9bd'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const cityContainer = document.querySelector("#weather span:first-child")
        const weatherContainer = document.querySelector("#weather span:last-child")
        const name = data.name;
        const weather = data.weather[0].main;

        cityContainer.innerText = name;
        weatherContainer.innerText = weather;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);