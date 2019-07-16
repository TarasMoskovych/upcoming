import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Movie } from '../shared/models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites = [];

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.getFavorites();
  }

  onAddToFavorites(movie: Movie) {
    const idx = this.favorites.findIndex((m: Movie) => m.id === movie.id);

    if (idx === -1) {
      this.favorites.push(movie);
      this.saveFavorites();
    }
  }

  onRemoveFromFavorites(id: number) {
    const idx = this.favorites.findIndex((movie: Movie) => movie.id === id);
    this.favorites.splice(idx, 1);
    this.saveFavorites();
  }

  private getFavorites() {
    this.storage.get('favorites').then((movies: Movie[]) => {
      if (movies && movies.length) {
        this.favorites = movies;
      }
    });
  }

  private saveFavorites() {
    this.storage.set('favorites', this.favorites);
  }
}
