import { Forecast, HPascalToMmhg, CelsiusBackToKelvin } from './forecast';

describe('weather-forecast', () => {

  it('builds', () => {
    expect(new Forecast()).toBeTruthy();
  });

  it('Should convert pressure from hPa to mmhg', () => {
    const component = new Forecast();
    expect(component.HPascalToMmhg(1024.96)).toEqual('768.9');
  });

  it('Should convert degrees from Celsius to Kelvin', () => {
    const component = new Forecast();
    expect(component.CelsiusBackToKelvin(13)).toEqual(286);
  });

});
