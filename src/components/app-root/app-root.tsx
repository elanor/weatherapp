import { Component, Method, Element } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

@Element() profileEl: HTMLElement;

@Method()
open(){
  this.profileEl.style.display = 'block'
}

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter loffl</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
