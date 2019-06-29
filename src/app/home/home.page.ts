import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Movies: Movie[];
  Shows: TVshow[];
  
  constructor(private movieService: MovieService) {}
  //We don't want to make an API call everytime we jump between tabs...might need soem work here
  ngOnInit(){
    Movies = findTrendingMovies();
    Shows  = findTrendingShows();
  }
  
  findTrendingMovies(){
    this.movieService.getTrendingMovies();
  }
  
  findTrendingShows(){
    this.movieService.getTrendingShows();
  }
}
