import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecommendedShowsPage } from './recommended-shows.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedShowsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecommendedShowsPage]
})
export class RecommendedShowsPageModule {}
