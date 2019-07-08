import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {
    movie: Movie;
    similar: Movie[];
  



  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id']
    this.movieService.getMovieDetails(id).subscribe(result => {
        this.movie = result; console.log(this.movie);
    });    
    this.movieService.findSimliarMovies(id).subscribe(res => {
        this.similar = res; console.log(this.similar)
    });
    
  }

  onMovieClick(id){
    this.router.navigate(['movie', id])
}
//probably need to change the paramater type
  addMovieToWatchlist(movie: Object){
      let unit = mapToStorageUnit(movie.title, movie.poster_path, movie.id, movie.overview, true, movie.average_rating);
      this.storageService.addMovieToWatchList(unit);
      console.log('added movie to watch list')
  }
  
  collectTombstone(movie: Object){
     let unit = mapToStorageUnit(movie.title, movie.poster_path, movie.id, movie.overview, true, movie.average_rating);
      this.storageService.collectTombstone(unit);
      console.log('added movie to watch list');
  }
  
  
  
  
  
  


}
