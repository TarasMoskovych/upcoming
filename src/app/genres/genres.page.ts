import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';

import { Genre } from './../shared/models';
import { HeaderService, DataService, StorageService } from './../core/services';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GenresPage implements OnInit, OnDestroy {
  genres: Genre[] = [];
  loaded = false;

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  ngOnDestroy() {
    this.storageService.setGenres(this.genres);
    this.headerService.dispatchApplyChanges(this.genres.filter((genre: Genre) => genre.checked));
  }

  private getGenres() {
    this.storageService.getGenres().then((genres?: Genre[]) => {
      if (genres && genres.length) {
        this.genres = genres;
        this.loaded = true;
      } else {
        this.dataService.getGenres()
          .pipe(take(1))
          .subscribe((genres: Genre[]) => {
            this.genres = genres;
            this.loaded = true;
          });
      }
    });
  }
}
