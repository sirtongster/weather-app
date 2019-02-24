export class Weather {
  constructor(city, countryCode) {
    this.apikey = '76a416eb5d5959b543c3ba230dfa07f1';
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;

    const response = await fetch(URI);

    const data = await response.json();

    return data;
  }

  changeLocation(city, countryCode){
    this.city = city;
    this.countryCode = countryCode;
  }
}