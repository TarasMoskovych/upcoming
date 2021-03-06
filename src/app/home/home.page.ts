import { Component, OnInit, ViewChild } from '@angular/core';
import { IonVirtualScroll } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { DataService, LoaderService, HeaderService, StorageService, ModalService } from './../core/services';
import { Movie, Genre, IonInfiniteScrollCustomEvent } from '../shared/models';
import { ViewMoreComponent } from '../shared/components';
import { GenresPage } from './../genres/genres.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonVirtualScroll, { static: false }) virtualScroll: IonVirtualScroll;
  @ViewChild(ViewMoreComponent, { static: false }) viewMoreComponent: ViewMoreComponent;

  movies: Movie[] = [];
  loading = false;
  noResults = false;
  isGetByQuery = false;
  isGetByGenres = false;
  isPopular = true;
  page = 1;
  ids = [];
  query = null;

  constructor(
    private dataService: DataService,
    private headerService: HeaderService,
    private loaderSerice: LoaderService,
    private modalService: ModalService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.loaderSerice.showLoader().then(this.initPage.bind(this));
    this.getGenres();
  }

  onTogglePopular(isPopular: boolean) {
    this.loading = true;
    this.clearMovies();
    this.isPopular = isPopular;
    this.isGetByGenres = false;
    this.isGetByQuery = false;

    this.getMovies();
    this.headerService.dispatch(this.isPopular ? 'Popular' : 'Upcoming');
  }

  onAddToFavorites(movie: Movie) {
    this.storageService.add(movie);
  }

  onRemoveFromFavorites(id: number) {
    this.storageService.remove(id);
  }

  onOpenGenres() {
    this.ids.length = 0;

    this.modalService.create('genres', {
      component: GenresPage,
    }).then(() => {
      this.modalService.present('genres');
    });
  }

  onSearch(query: string) {
    this.query = query;
    this.clearMovies();
    this.getMoviesByQuery();
  }

  itemHeightFn() {
    return 200;
  }

  onLoadMore(event: IonInfiniteScrollCustomEvent) {
    this.page++;

    const cb = () => event.target.complete();

    if (this.isGetByGenres) {
      this.getMoviesByGenres(cb);
    } else if (this.isGetByQuery) {
      this.getMoviesByQuery(cb);
    } else {
      this.getMovies(cb);
    }
  }

  isExists(id: number) {
    return this.storageService.checkExisting(id);
  }

  private initPage(loader: any) {
    loader.present();

    this.headerService.dispatch('Popular');

    Promise.resolve().then(this.getMovies.bind(this, () => loader.dismiss()));
  }

  private getGenres() {
    this.headerService.applyChanges$
      .subscribe((genres: Genre[]) => {
        genres.forEach((genre: Genre) => this.ids.push(genre.id));

        this.clearMovies();
        this.getMoviesByGenres();
      });
  }

  private getMovies(callback?: () => void) {
    const page = this.page.toString();
    const sub$ = this.isPopular ? this.dataService.getPopular(page) : this.dataService.getUpcoming(page);

    sub$
      .pipe(take(1))
      .subscribe((data: Movie[]) => {
        this.onLoadDone(data, callback);
      });
  }

  private getMoviesByGenres(callback?: () => void) {
    this.isGetByGenres = true;
    this.isGetByQuery = false;
    this.loading = true;

    this.dataService.getByParams(this.page.toString(), { with_genres: this.ids.join() })
      .pipe(take(1))
      .subscribe((data: Movie[]) => {
        this.onLoadDone(data, callback);
    });
  }

  private getMoviesByQuery(callback?: () => void) {
    this.isGetByQuery = true;
    this.isGetByGenres = false;
    this.loading = true;

    this.dataService.getByQuery(this.page.toString(), { query: this.query })
      .pipe(take(1))
      .subscribe((data: Movie[]) => {
        this.onLoadDone(data, callback);
    });
  }

  private onLoadDone(data: Movie[], callback?: () => void) {
    data.forEach((movie: Movie) => this.movies.push(movie));

    if (this.virtualScroll) {
      this.virtualScroll.checkEnd();
    }

    if (data.length === 0) {
      this.viewMoreComponent.disable();
    }

    this.loading = false;
    this.noResults = this.movies.length === 0;

    if (callback) { callback(); }
  }

  private clearMovies() {
    this.movies.length = 0;
    this.page = 1;

    if (this.viewMoreComponent) {
      this.viewMoreComponent.enable();
    }
  }
}
