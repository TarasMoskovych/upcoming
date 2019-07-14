import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { take } from 'rxjs/operators';

import { DataService, LoaderService } from './../core/services';
import { Movie } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies = [];
  favorites = [];
  genre = { id: 1, name: 'Popular' };

  constructor(
    private dataService: DataService,
    private storage: Storage,
    private loaderSerice: LoaderService
  ) { }

  ngOnInit() {
    this.loaderSerice.showLoader().then(this.initPage.bind(this));
  }

  onTogglePopular(isPopular: boolean) {
    this.getMovies(isPopular);
  }

  private initPage(loader: any) {
    loader.present();

    Promise.resolve()
      .then(this.initializeStorage.bind(this))
      .then(this.getMovies.bind(this, true, loader));
  }

  private initializeStorage() {
    this.storage.get('genre').then(val => {
      val ? this.genre = val : this.storage.set('genre', { id: 5, name: 'Genre' });
    });

    this.storage.get('favorites').then(val => {
      val ? this.favorites = val : this.storage.set('favorites', this.favorites);
    });
  }

  private getMovies(isPopular: boolean = true, loader?: any) {
    const sub$ = isPopular ? this.dataService.getPopular('1') : this.dataService.getUpcoming('1');

    sub$.pipe(take(1))
      .subscribe((data: Movie[]) => {
        this.movies = data;

        if (loader) { loader.dismiss(); }
      });
  }
}
