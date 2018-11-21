import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  // @Prop() timetitle: string;
  // @Prop() timecontent: string;

  // @Method
  // open {
  //
  // }

  // timetitle="Select a city"
  // timecontent="This allows you to see the nearest forecast"

  render() {
    return (
      <div class='app-home'>

            <stencil-route-link url='/profile/options'>
              <button>
                Show options
              </button>
            </stencil-route-link>
            
              <hr/>





      </div>
    );
  }
}
