const weather = new Weather('Tokyo', 'jp');
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

    weather.changeLocation(cityName, countryCode);
    getWeather();

    $('#loc-modal').modal('hide');
});
