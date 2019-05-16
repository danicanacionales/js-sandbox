class Weather {
    constructor(cityName, countryCode) {
        this.app_id = "470b8ce2164dc8ba00a931934e7c5e53";
        this.cityName = cityName;
        this.countryCode = countryCode;
    }

    returnInfo(){
        return this;
    }

    async getWeather(){
        console.log(`weather ${this.cityName}`);
        let weatherResponse;
        if(this.countryCode !== ''){
            weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.app_id}`);
        }else{
            weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.countryCode}&appid=${this.app_id}`);
        }

        const weather = await weatherResponse.json();

        return weather;
    }

    changeLocation(cityName, countryCode){
        this.cityName = cityName;
        this.countryCode = countryCode;
        storage.setLocationData(cityName, countryCode);
    }
}