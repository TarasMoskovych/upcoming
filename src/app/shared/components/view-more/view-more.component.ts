import { Component, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { IonInfiniteScrollCustomEvent } from '../../models';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewMoreComponent {
  @Output() viewMore = new EventEmitter<IonInfiniteScrollCustomEvent>();
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  onViewMore(event: IonInfiniteScrollCustomEvent) {
    this.viewMore.emit(event);
  }

  disable() {
    this.infiniteScroll.disabled = true;
  }

  enable() {
    this.infiniteScroll.disabled = false;
  }

}
