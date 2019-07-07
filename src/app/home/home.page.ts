import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { take } from 'rxjs/operators';

import { DataService, LoaderService } from './../core/services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies = [];
  favorites = [];
  genre = { id: 1, name: 'Test' };

  constructor(
    private dataService: DataService,
    private storage: Storage,
    private loaderSerice: LoaderService
  ) { }

  ngOnInit() {
    this.loaderSerice.showLoader().then(this.initPage.bind(this));
  }

  private initPage(loader: any) {
    loader.present();

    Promise.resolve()
      .then(this.initializeStorage.bind(this))
      .then(this.getPopular.bind(this, loader));
  }

  private initializeStorage() {
    this.storage.get('genre').then(val => {
      val ? this.genre = val : this.storage.set('genre', { id: 5, name: 'Genre' });
    });

    this.storage.get('favorites').then(val => {
      val ? this.favorites = val : this.storage.set('favorites', this.favorites);
    });
  }

  private getPopular(loader?: any) {
    this.dataService.getPopular('1')
    .pipe(take(1))
    .subscribe(data => {
      this.movies = data;

      if (loader) { loader.dismiss(); }
    });
  }
}
