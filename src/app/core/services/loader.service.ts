import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';

import { CoreModule } from './../core.module';

@Injectable({
  providedIn: CoreModule
})
export class LoaderService {
  options: LoadingOptions = {
    spinner: 'circles',
    message: 'Please wait...',
    translucent: true
  };

  constructor(public loading: LoadingController) { }

  showLoader() {
    return this.loading.create(this.options);
  }
}
