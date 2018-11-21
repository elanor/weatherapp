import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'selected-button',
  styleUrl: 'selected-button.css',
  shadow: true
})
export class SelectedButton {

  @Prop() url: string;
  @Prop() active: boolean;
  @Prop() onClick;

  render() {
    return (
      <button class='my-button' onClick={this.onClick}>
        {this.active ? 'Selected ->' : ''}<slot/>
      </button>
    );
  }
}
