import { kelvinToCelsius } from './temperature-converter';

describe('temperature conv', () => {
  it('Should conver degrees', () => {
    const value = kelvinToCelsius(269);
    expect(value).toEqual(-4);
  })
})
