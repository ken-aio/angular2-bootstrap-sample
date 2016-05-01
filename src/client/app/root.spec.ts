import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AppRoot} from '../app/root';

beforeEachProviders(() => [AppRoot]);

describe('App: AppRoot', () => {
  it('should have the `defaultMeaning` as 42', inject([AppRoot], (app: AppRoot) => {
    // expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([AppRoot], (app: AppRoot) => {
      // expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      // expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

