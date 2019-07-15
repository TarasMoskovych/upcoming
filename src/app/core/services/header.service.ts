import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class HeaderService {
  private channel = new Subject<string>();

  channel$ = this.channel.asObservable();

  dispatch(val: string) {
    this.channel.next(val);
  }
}
