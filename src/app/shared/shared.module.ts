import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent, MovieComponent, ViewMoreComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    MovieComponent,
    ViewMoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    MovieComponent,
    ViewMoreComponent,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
