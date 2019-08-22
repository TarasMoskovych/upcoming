import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { CoreModule } from '../core.module';
import { Movie, Genre } from 'src/app/shared/models';

@Injectable({
  providedIn: CoreModule
})
export class StorageService {
  private favorites: Movie[] = [];
  private genres: Genre[] = [];

  constructor(private storage: Storage) {
    this.initializeStorage();
  }

  add(movie: Movie) {
    const idx = this.favorites.findIndex((m: Movie) => m.id === movie.id);

    if (idx === -1) { this.favorites.push(movie); }

    return this.updateStorage();
  }

  remove(id: number) {
    const idx = this.favorites.findIndex((movie: Movie) => movie.id === id);
    this.favorites.splice(idx, 1);

    return this.updateStorage();
  }

  checkExisting(id: number) {
    return this.favorites.findIndex((movie: Movie) => movie.id === id) !== -1;
  }

  getFavorites() {
    return this.storage.get('favorites');
  }

  getGenres() {
    return this.storage.get('genres');
  }

  setGenres(genres: Genre[]) {
    this.storage.set('genres', genres);
  }

  private initializeStorage() {
    this.storage.get('favorites').then((movies?: Movie[]) => {
      if (movies && movies.length) {
        this.favorites = movies;
      }
    });

    this.storage.get('genres').then((genres?: Genre[]) => {
      if (genres && genres.length) {
        this.genres = genres;
      }
    });
  }

  private updateStorage() {
    return this.storage.set('favorites', this.favorites);
  }
}
