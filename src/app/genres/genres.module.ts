import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GenresPage } from './genres.page';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GenresPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class GenresPageModule {}
