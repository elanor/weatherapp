import { Component, Method, Element } from '@stencil/core';


@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: true
})
export class MyModal {

@Element() profileEl: HTMLElement;

@Method()
open(){
  this.profileEl.style.display = 'block'
}

  render() {
    return (
      <div>
                <h1> I AM NAINEN loffl</h1>

<p> fgdfgdfgdfgdfgdfg </p>

      </div>
    );
  }
}
