import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatchlistQuickActionPage } from './watchlist-quick-action.page';

const routes: Routes = [
  {
    path: '',
    component: WatchlistQuickActionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatchlistQuickActionPage]
})
export class WatchlistQuickActionPageModule {}
