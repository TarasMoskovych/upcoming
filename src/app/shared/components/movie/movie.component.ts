import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from 'src/app/shared/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() favorites: Movie[];

  constructor() { }

  ngOnInit() {
  }

  onViewMore() {}
  addToFavorites() { }
  removeFromFavorites() {}

}
