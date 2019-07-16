import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
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
  { path: 'tv/:id/season/:season_number/episode/:episodeid', loadChildren: './episode-details/episode-details.module#EpisodeDetailsPageModule' },
  { path: 'sort-page', loadChildren: './modals/sort-page/sort-page.module#SortPagePageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule'},
  { path: 'rating', loadChildren: './modals/rating/rating.module#RatingPageModule' },
  { path: 'genre', loadChildren: './modals/genre/genre.module#GenrePageModule' },
  { path: 'movie-rec', loadChildren: './recommendations/movie-rec/movie-rec.module#MovieRecPageModule' },
  { path: 'show-rec', loadChildren: './recommendations/show-rec/show-rec.module#ShowRecPageModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
  { path: 'recommendations', loadChildren: './modals/recommendations/recommendations.module#RecommendationsPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  { path: 'internet-conn', loadChildren: './modals/internet-conn/internet-conn.module#InternetConnPageModule' },
  { path: 'library-quick-action', loadChildren: './modals/library-quick-action/library-quick-action.module#LibraryQuickActionPageModule' },
  { path: 'watchlist-quick-action', loadChildren: './modals/watchlist-quick-action/watchlist-quick-action.module#WatchlistQuickActionPageModule' },
  { path: 'favorites-quick-action', loadChildren: './modals/favorites-quick-action/favorites-quick-action.module#FavoritesQuickActionPageModule' },
  { path: 'genre-select', loadChildren: './genres/genre-select/genre-select.module#GenreSelectPageModule' },
  { path: 'genre-movie', loadChildren: './genres/genre-movie/genre-movie.module#GenreMoviePageModule' },
  { path: 'genre-show', loadChildren: './genres/genre-show/genre-show.module#GenreShowPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
