import { InjectionToken } from '@angular/core';

const baseUrl = 'https://api.themoviedb.org/3';
const imageUrl = 'https://image.tmdb.org/t/p/w780';

export const origin = new InjectionToken<string>('origin');
export const imageToken = new InjectionToken<string>('imageToken');

export const ApiProvider = {
  provide: origin,
  useValue: baseUrl
};

export const ImageProvider = {
  provide: imageToken,
  useValue: imageUrl
};
