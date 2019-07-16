import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/shared/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() movie: Movie;
  @Input() favorites: Movie[] = [];
  @Output() addToFavorites = new EventEmitter<Movie>();
  @Output() removeFromFavorites = new EventEmitter<number>();

  onViewMore(id: any) {}

  onAddToFavorites(movie: Movie) {
    this.addToFavorites.emit(movie);
  }

  onRemoveFromFavorites(id: number) {
    this.removeFromFavorites.emit(id);
  }

  checkInFavorites(id: number) {
    return this.favorites.findIndex((movie: Movie) => movie.id === id) !== -1;
  }

}
