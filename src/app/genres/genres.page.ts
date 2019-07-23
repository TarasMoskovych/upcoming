import { Component, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { Genre } from './../shared/models';
import { HeaderService } from './../core/services';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenresPage implements OnDestroy {
  constructor(private headerService: HeaderService) { }

  @Input() genres: Genre[];

  ngOnDestroy() {
    this.headerService.dispatchGenres(this.genres.filter((genre: Genre) => genre.checked));
  }
}
