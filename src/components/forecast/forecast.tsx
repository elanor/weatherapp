import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'weather-forecast',
  styleUrl: 'forecast.css',
  shadow: true,
})
export class Forecast {

  @Prop() data: any;

  @Prop() temp; pressure; speed: number;
  @Prop() description; weather; name; humidity; main: string;

  CelsiusBackToKelvin(deg: number): number {
    return deg + 273;
  }

  HPascalToMmhg(deg: number): string {
    var x = deg/1.333;
    return x.toFixed(2);
  }

  render() {
    if(!this.data) {
      return 'Unknown weather';
    }
      return (
      <div>

      <script>
      </script>

        <p>Temperature: {this.data.main.temp} degrees Celsius</p>
        <p>Atmospheric pressure: {this.HPascalToMmhg(this.data.main.pressure)} mmhg</p>
        <p>Humidity: {this.data.main.humidity}%</p>
        <p>{this.data.weather[0].description}</p>
        <p>Wind: {this.data.wind.speed}m/sec</p>
      </div>
    );
  }
}
