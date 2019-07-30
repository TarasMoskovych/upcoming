import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { DataService, LoaderService, HeaderService, StorageService, ModalService } from './../core/services';
import { Movie, Genre, IonInfiniteScrollCustomEvent } from '../shared/models';
import { GenresPage } from './../genres/genres.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies: Movie[] = [];
  loading = false;
  noResults = false;
  isGetByGenres = false;
  isPopular = true;
  page = 1;
  ids = [];

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
    this.clearMovies(false);
    this.isPopular = isPopular;
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
    this.dataService.getGenres().subscribe(async (genres: Genre[]) => {
      genres.forEach(genre => genre.checked = false);

      this.modalService.create('genres', {
        component: GenresPage,
        componentProps: {
          genres
        }
      }).then(() => {
        this.modalService.present('genres');
      });
    });
  }

  onSearch(value: string) {
    console.log(value);
  }

  onLoadMore(event: IonInfiniteScrollCustomEvent) {
    this.page++;

    const cb = () => event.target.complete();
    this.isGetByGenres ? this.getMoviesByGenres(cb) : this.getMovies(cb);
  }

  isExists(id: number) {
    return this.storageService.checkExisting(id);
  }

  private initPage(loader: any) {
    loader.present();

    this.headerService.dispatch('Popular');

    Promise.resolve().then(this.getMovies.bind(this, () => loader.dismiss()));
  }

  private getMovies(callback?: () => void) {
    const page = this.page.toString();
    const sub$ = this.isPopular ? this.dataService.getPopular(page) : this.dataService.getUpcoming(page);

    sub$.pipe(take(1))
      .subscribe((data: Movie[]) => {
        this.movies = this.movies.concat(data);
        this.loading = false;
        this.noResults = this.movies.length === 0;

        if (callback) { callback(); }
      });
  }

  private getGenres() {
    this.headerService.applyChanges$.subscribe((genres: Genre[]) => {
      genres.forEach((genre: Genre) => this.ids.push(genre.id));

      this.clearMovies(true);
      this.getMoviesByGenres();
    });
  }

  private getMoviesByGenres(callback?: () => void) {
    this.loading = true;
    this.dataService.getByParams(this.page.toString(), { with_genres: this.ids.join() })
      .subscribe((data: Movie[]) => {
        this.movies = this.movies.concat(data);
        this.loading = false;
        this.noResults = this.movies.length === 0;

        if (callback) { callback(); }
    });
  }

  private clearMovies(isGetByGenres: boolean) {
    this.isGetByGenres = isGetByGenres;
    this.movies.length = 0;
    this.page = 1;
  }
}
