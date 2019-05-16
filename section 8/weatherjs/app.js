const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(result => {
        console.log(weather.returnInfo());
        console.log(result);
        ui.displayWeather(result);
    })
    .catch(err => console.log(err));
}

document.getElementById('w-change-btn').addEventListener('click', function(e){
    const cityName = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    if(cityName === '' || countryCode === ''){
        ui.showAlert('<strong>Oh no!</strong> Please enter valid inputs.', 'alert alert-danger');
    } else {
        weather.changeLocation(cityName, countryCode);
        getWeather();
    
        $('#loc-modal').modal('hide');
    }
});
