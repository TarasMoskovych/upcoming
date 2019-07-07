import { InjectionToken } from '@angular/core';

const baseUrl = 'https://api.themoviedb.org/3';

export const origin = new InjectionToken<string>('origin');
export const ApiProvider = {
  provide: origin,
  useValue: baseUrl
};
