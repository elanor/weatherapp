import { Component, Watch, State } from '@stencil/core';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {

  @State() city: string;
  @State() period: string;
  @State() data: object;

  @Watch('city')
  @Watch('period')
  getForecast() {
    if(!this.city || !this.period) {
      this.data = null;
      return;
    }

    fetch('http://api.openweathermap.org/data/2.5/' + this.period + '?&units=metric&q=' + this.city + '&apikey=b54aaa8becb33d41027d190bf5e5cffe')
        .then(res => res.json())
        .then(data => {
            this.data = data;
         })
         .catch(err => console.log(err))
       }

  render() {

      return (
        <div class="app-profile">

        <h1>Select a city</h1>

            <selected-button active={this.city === 'lappeenranta'} onClick={() => this.city = 'lappeenranta'}>
              Lappeenranta
            </selected-button>

            <selected-button active={this.city === 'helsinki'} onClick={() => this.city = 'helsinki'}>
              Helsinki
            </selected-button>

            <selected-button active={this.city === 'sevilla'} onClick={() => this.city = 'sevilla'}>
              Sevilla
            </selected-button>

            <hr/>

            <p>Choose a time period for the forecast</p>

            <selected-button active={this.period === 'weather'} onClick={() => this.period = 'weather'}>
              Today
            </selected-button>

            <selected-button active={this.period === 'forecast'} onClick={() => this.period = 'forecast'}>
              5 Days
            </selected-button>
            <br></br>
            <hr/>
            <weather-forecast data={this.data}/>
        </div>

      );


  }
}
