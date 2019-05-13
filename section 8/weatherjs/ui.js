class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    displayWeather(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.dewpoint.textContent = `Pressure: ${weather.main.pressure}`;
        this.feelsLike.textContent = `Maximum Temperature: ${weather.main.temp_max}`;
        this.wind.textContent = `Minimum Temperature: ${weather.main.temp_min}`;
    }
}