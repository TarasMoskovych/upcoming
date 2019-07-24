import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent, LoaderComponent, MovieComponent, ViewMoreComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    MovieComponent,
    ViewMoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    MovieComponent,
    ViewMoreComponent,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
