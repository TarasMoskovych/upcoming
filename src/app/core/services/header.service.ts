import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CoreModule } from '../core.module';
import { Genre } from 'src/app/shared/models';

@Injectable({
  providedIn: CoreModule
})
export class HeaderService {
  private channel = new Subject<string>();
  private applyChanges = new Subject<Genre[]>();
  private genres = new Subject<any[]>();

  channel$ = this.channel.asObservable();
  applyChanges$ = this.applyChanges.asObservable();
  genres$ = this.genres.asObservable();

  dispatch(val: string) {
    this.channel.next(val);
  }

  dispatchApplyChanges(genres: Genre[]) {
    this.applyChanges.next(genres);
  }

  dispatchGenres(ids: any) {
    this.genres.next(ids);
  }
}
