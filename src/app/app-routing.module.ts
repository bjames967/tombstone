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
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule'},
  { path: 'movie/:id', loadChildren: './moviedetails/moviedetails.module#MoviedetailsPageModule' },
  { path: 'tv/:id', loadChildren: './showdetails/showdetails.module#ShowdetailsPageModule' },
  { path: 'tv/:id/season/:season_number', loadChildren: './season/season.module#SeasonPageModule' },
  { path: 'tv/:id/season/:season_number/episode/:episodeid', loadChildren: './episode-details/episode-details.module#EpisodeDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
