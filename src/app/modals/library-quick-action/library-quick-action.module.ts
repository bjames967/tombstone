import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LibraryQuickActionPage } from './library-quick-action.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryQuickActionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LibraryQuickActionPage]
})
export class LibraryQuickActionPageModule {}
