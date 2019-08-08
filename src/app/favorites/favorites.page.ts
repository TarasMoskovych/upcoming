import { Component, OnInit, ViewChild } from '@angular/core';
import { IonVirtualScroll } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { Movie } from '../shared/models';
import { StorageService } from '../core/services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  @ViewChild(IonVirtualScroll, { static: false }) virtualScroll: IonVirtualScroll;

  favorites: Movie[] = [];
  search: Movie[] = [];

  constructor(private storageService: StorageService, private keyboard: Keyboard) { }

  ngOnInit() {
    this.getFavorites();
  }

  onRemoveFromFavorites(id: number) {
    this.storageService.remove(id).then(() => {
      this.getFavorites();

      if (this.virtualScroll) {
        this.virtualScroll.checkEnd();
      }
    });
  }

  onSearch() {
    this.keyboard.hide();
  }

  onChange(value: string) {
    if (value === '') {
      return this.onClear();
    }

    this.favorites = this.search.filter((movie: Movie) => movie.title.search(new RegExp(value, 'i')) !== -1);
  }

  onClear() {
    this.favorites = [...this.search];
  }

  isExists(id: number) {
    return this.storageService.checkExisting(id);
  }

  itemHeightFn() {
    return 200;
  }

  private getFavorites() {
    this.storageService.getFavorites().then((data?: Movie[]) => {
      data && data.length ? this.favorites = [...data] : this.favorites.length = 0;
      this.search = [...this.favorites];
    });
  }
}
