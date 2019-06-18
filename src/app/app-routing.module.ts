import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'search-details/:id', loadChildren: './search-details/search-details.module#SearchDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
