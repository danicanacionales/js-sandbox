class Storage {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Singapore';
        this.defaultCountryCode = 'sg';
    }

    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
            this.countryCode = this.defaultCountryCode;
        } else {
            this.city = localStorage.getItem('city');
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}