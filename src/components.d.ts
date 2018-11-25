/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AppProfile {}
  interface AppProfileAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface WeatherForecast {
    'data': any;
    'description': string;
    'humidity': number;
    'main': any;
    'name': string;
    'pressure': number;
    'speed': number;
    'temp': number;
    'weather': string;
  }
  interface WeatherForecastAttributes extends StencilHTMLAttributes {
    'data'?: any;
    'description'?: string;
    'humidity'?: number;
    'main'?: any;
    'name'?: string;
    'pressure'?: number;
    'speed'?: number;
    'temp'?: number;
    'weather'?: string;
  }

  interface SelectedButton {
    'active': boolean;
    'onClick': any;
    'url': string;
  }
  interface SelectedButtonAttributes extends StencilHTMLAttributes {
    'active'?: boolean;
    'onClick'?: any;
    'url'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'WeatherForecast': Components.WeatherForecast;
    'SelectedButton': Components.SelectedButton;
  }

  interface StencilIntrinsicElements {
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'weather-forecast': Components.WeatherForecastAttributes;
    'selected-button': Components.SelectedButtonAttributes;
  }


  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLWeatherForecastElement extends Components.WeatherForecast, HTMLStencilElement {}
  var HTMLWeatherForecastElement: {
    prototype: HTMLWeatherForecastElement;
    new (): HTMLWeatherForecastElement;
  };

  interface HTMLSelectedButtonElement extends Components.SelectedButton, HTMLStencilElement {}
  var HTMLSelectedButtonElement: {
    prototype: HTMLSelectedButtonElement;
    new (): HTMLSelectedButtonElement;
  };

  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'weather-forecast': HTMLWeatherForecastElement
    'selected-button': HTMLSelectedButtonElement
  }

  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'weather-forecast': HTMLWeatherForecastElement;
    'selected-button': HTMLSelectedButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
