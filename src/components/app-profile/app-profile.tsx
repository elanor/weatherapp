import { Component, Watch, State} from '@stencil/core';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {

  @State() city: string;
  @State() period: string;
  @State() data: any;

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

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
      return 'the chosen city';
    }


  render() {

      return (

        <div id="mainpage" class="app-profile">



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
            <br/>
            <hr/>
            <h1>Weather for {this.normalize(this.city)}</h1>

            {
            this.period === 'weather' && !this.data.list
              ? <weather-forecast data={this.data}/>
              : this.data && this.data.list && this.data.list.map(item => <div>
                  <h2>{item.dt_txt}</h2>
                  <weather-forecast data={item}/>
                </div>)
            }

        </div>

      );


  }
}
