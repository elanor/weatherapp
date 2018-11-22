import { CelsiusBackToKelvin } from './forecast';

describe('CelsiusBackToKelvin', () => {
  it('Should convert degrees', () => {
    const value = CelsiusBackToKelvin();
    expect(13).toEqual(286););
  });
