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
  @Output() addToFavorites = new EventEmitter<number>();
  @Output() removeFromFavorites = new EventEmitter<number>();

  onViewMore(id: any) {}

  onAddToFavorites(id: any) {
    this.addToFavorites.emit(id);
  }

  onRemoveFromFavorites(id: any) {
    this.removeFromFavorites.emit(id);
  }

}
