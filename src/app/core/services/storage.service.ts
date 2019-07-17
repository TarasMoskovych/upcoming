import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { CoreModule } from '../core.module';
import { Movie } from 'src/app/shared/models';

@Injectable({
  providedIn: CoreModule
})
export class StorageService {
  private favorites: Movie[] = [];

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

  private initializeStorage() {
    this.storage.get('favorites').then((movies?: Movie[]) => {
      if (movies && movies.length) {
        this.favorites = movies;
      }
    });
  }

  private updateStorage() {
    return this.storage.set('favorites', this.favorites);
  }
}
