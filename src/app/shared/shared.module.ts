import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent, MovieComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    MovieComponent,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
