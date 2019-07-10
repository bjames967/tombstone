import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecommendedMoviesPage } from './recommended-movies.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedMoviesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecommendedMoviesPage]
})
export class RecommendedMoviesPageModule {}
