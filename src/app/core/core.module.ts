import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ApiProvider, ImageProvider } from './configs';

@NgModule({
  declarations: [],
  providers: [ApiProvider, ImageProvider],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CoreModule { }
