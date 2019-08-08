import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ModalService {
  modals = {};

  constructor(public modalController: ModalController) { }

  async create(key: string, options: any) {
    const modal = await this.modalController.create({
      component: options.component,
      componentProps: options.componentProps
    });

    this.modals[key] = modal;
    return await this.modals[key];
  }

  async present(key: string) {
    if (this.modals[key]) {
      return await this.modals[key].present();
    }
  }

  async dismiss(key: string) {
    if (this.modals[key]) {
      return await this.modals[key].dismiss();
    }
  }
}
