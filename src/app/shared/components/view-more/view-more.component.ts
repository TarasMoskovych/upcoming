import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IonInfiniteScrollCustomEvent } from '../../models';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewMoreComponent {
  @Output() viewMore = new EventEmitter<IonInfiniteScrollCustomEvent>();

  onViewMore(event: IonInfiniteScrollCustomEvent) {
    this.viewMore.emit(event);
  }

}
