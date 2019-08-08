import { Injectable, Inject } from '@angular/core';

import { CoreModule } from '../core.module';
import { imageToken } from '../configs';

@Injectable({
  providedIn: CoreModule
})
export class ImageService {

  constructor(
    @Inject(imageToken) private url: string
  ) { }

  getUrl(path?: string | null) {
    return path ? `${this.url}${path}` : 'assets/img/blank.png';
  }
}
