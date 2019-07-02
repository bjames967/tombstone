import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';


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
              private router: Router) { }

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

  addToWatchList(id){
    //TODO 
  }
  
  removeFromEatchList(id){
    //TODO add "Help us understand why you no longer want to watch this anymore? Options(I saw it->library, Doesn't interest me anymore)
    //use above data to help preference movies for that user
  }
  collectTombstone(id){
    //TODO
  }
  
  removieTombstone(id){
    //TODO
  }
  
  


}
