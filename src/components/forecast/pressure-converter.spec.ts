import { HPascalToMmhg } from './forecast';

describe('HPascalToMmhg', () => {
  it('Should convert pressure', () => {
    const value = HPascalToMmhg();
    expect(1024.96).toEqual(768.91););
  });
