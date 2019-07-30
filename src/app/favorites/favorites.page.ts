import { IonVirtualScroll } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Movie } from '../shared/models';
import { StorageService } from '../core/services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  favorites: Movie[] = [];

  constructor(private storageService: StorageService) { }

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

  isExists(id: number) {
    return this.storageService.checkExisting(id);
  }

  itemHeightFn() {
    return 180;
  }

  private getFavorites() {
    this.storageService.getFavorites().then((data?: Movie[]) => {
      data && data.length ? this.favorites = [...data] : this.favorites.length = 0;
    });
  }
}
