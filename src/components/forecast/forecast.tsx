import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'weather-forecast',
  styleUrl: 'forecast.css',
  shadow: true,
})
export class Forecast {

  @Prop() data: any;

  render() {
    if(!this.data) {
      return 'Unknown weather';
    }
      return (
      <div>

        <p>Temperature for {this.data.name}, {this.data.sys.country}:</p>
        <p>{this.data.dt}</p>
        <p>Sunrise at {this.data.sys.sunrise}, sunset at {this.data.sys.sunset}</p>
        <p>temperature: {this.data.main.temp} degrees Celsium</p>
        <p>pressure: {this.data.}
        <p>Sky: {this.data.weather.main} {this.data.clouds} day</p>
        <p>wind: {this.data.wind.speed}m/sec</p>
        <p>precipitation: {this.data.rain}</p>
      </div>
    );
  }
}
