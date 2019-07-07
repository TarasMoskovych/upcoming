import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ApiProvider } from './configs';

@NgModule({
  declarations: [],
  providers: [ApiProvider],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CoreModule { }
