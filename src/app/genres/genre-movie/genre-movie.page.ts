import { Component, OnInit } from '@angular/core';
import { MoviesService } from '././../services/movie.service';
import { Movie } from '././../models/Movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.page.html',
  styleUrls: ['./genre-movie.page.scss'],
})
export class GenreMoviePage implements OnInit {
  genreType: 'Movie' | 'TV';
  results: Movie[] | TVshow[];
  
  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      let type = this.activateRoute.snapshot.params['type'];
      let id = this.activateRoute.snapshot.params['id'];
      if(type === 'm'){
        this.movieService.getMovieByGenres(id).subscribe(res => {
          this.results = res; console.log(this.results);
        });
      }else{
        this.movieService.getShowByGenres(id).subscribe(res => {
          this.results = res; console.log(this.results);
        });
      }  
  }
  
   onMovieClick(id){
      this.router.navigate(['movie', id])
  }

  onTvClick(id){
      this.router.navigate(['tv', id])
  }

}
