import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ModalService {
  modal = null;

  constructor(public modalController: ModalController) { }

  async create(options: any) {
    const modal = await this.modalController.create({
      component: options.component,
      componentProps: options.componentProps
    });

    this.modal = modal;
    return await this.modal;
  }

  async present() {
    return await this.modal.present();
  }

  async dismiss() {
    return await this.modal.dismiss();
  }
}
