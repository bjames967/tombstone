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
  { path: 'search/movie/:id', loadChildren: './moviedetails/moviedetails.module#MoviedetailsPageModule' },
  { path: 'search/tv/:id', loadChildren: './showdetails/showdetails.module#ShowdetailsPageModule' },
  { path: 'search/p/:id', loadChildren: './actordetails/actordetails.module#ActordetailsPageModule' },
  { path: 'search/tv/:id/season/:seasonid', loadChildren: './season/season.module#SeasonPageModule' },
  { path: 'search/tv/:id/season/:seasonid/episode/:episodeid', loadChildren: './episode-details/episode-details.module#EpisodeDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
