import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/shared/models';
import { ImageService } from 'src/app/core/services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() movie: Movie;
  @Input() isExists = false;
  @Output() addToFavorites = new EventEmitter<Movie>();
  @Output() removeFromFavorites = new EventEmitter<number>();

  constructor(public imageService: ImageService) { }

  onViewMore(id: any) {}

  onAddToFavorites(e: MouseEvent, movie: Movie) {
    e.preventDefault();
    e.stopPropagation();
    this.addToFavorites.emit(movie);
  }

  onRemoveFromFavorites(e: MouseEvent, id: number) {
    e.preventDefault();
    e.stopPropagation();
    this.removeFromFavorites.emit(id);
  }
}
