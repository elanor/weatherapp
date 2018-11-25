import { AppProfile } from './app-profile';

describe('app-profile', () => {
  it('builds', () => {
    expect(new AppProfile()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns "the chosen city" if the name is undefined', () => {
      const component = new AppProfile();
      expect(component.normalize(undefined)).toEqual('the chosen city');
    });

    it('returns "the chosen city" if the name is null', () => {
      const component = new AppProfile();
      expect(component.normalize(null)).toEqual('the chosen city');
    });

    it('capitalizes the first letter', () => {
      const component = new AppProfile();
      expect(component.normalize('lappeenranta')).toEqual('Lappeenranta');
    });
  });
});
