import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { take } from 'rxjs/operators';

import { DataService, LoaderService, HeaderService } from './../core/services';
import { Movie, IonInfiniteScrollCustomEvent } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies = [];
  favorites = [];
  genre = { id: 1, name: 'Popular' };
  isPopular = true;
  page = 1;

  constructor(
    private dataService: DataService,
    private storage: Storage,
    private headerService: HeaderService,
    private loaderSerice: LoaderService
  ) { }

  ngOnInit() {
    this.loaderSerice.showLoader().then(this.initPage.bind(this));
  }

  onTogglePopular(isPopular: boolean) {
    this.movies.length = 0;
    this.page = 1;
    this.isPopular = isPopular;
    this.getMovies();

    this.headerService.dispatch(this.isPopular ? 'Popular' : 'Upcoming');
  }

  private initPage(loader: any) {
    loader.present();

    this.headerService.dispatch('Popular');

    Promise.resolve()
      .then(this.initializeStorage.bind(this))
      .then(this.getMovies.bind(this, () => loader.dismiss()));
  }

  private initializeStorage() {
    this.storage.get('genre').then(val => {
      val ? this.genre = val : this.storage.set('genre', { id: 5, name: 'Genre' });
    });

    this.storage.get('favorites').then(val => {
      val ? this.favorites = val : this.storage.set('favorites', this.favorites);
    });
  }

  private getMovies(callback?: () => void) {
    const page = this.page.toString();
    const sub$ = this.isPopular ? this.dataService.getPopular(page) : this.dataService.getUpcoming(page);

    sub$.pipe(take(1))
      .subscribe((data: Movie[]) => {
        this.movies = this.movies.concat(data);

        if (callback) { callback(); }
      });
  }

  onLoadMore(event: IonInfiniteScrollCustomEvent) {
    this.page++;

    this.getMovies(() => {
      event.target.complete();
    });
  }
}
