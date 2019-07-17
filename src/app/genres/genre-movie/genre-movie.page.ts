import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../service/movies.service';
import { Movie } from './../../models/Movie';
import { TVshow } from './../../models/TVshow'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.page.html',
  styleUrls: ['./genre-movie.page.scss'],
})
export class GenreMoviePage implements OnInit {
  pageTitle = "";
  GenreType: 'Movie' | 'TV';
  results: Movie[] | TVshow[];
  
  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      let type = this.activateRoute.snapshot.params['type'];
      if(type === 't'){
        this.GenreType = 'TV';
      }else{
        this.GenreType = 'Movie';
        console.log("MOVIE")
      }
      let id = this.activateRoute.snapshot.params['id'];
      this.pageTitle = this.activateRoute.snapshot.params['name'];
      if(type === 'm'){
        this.movieService.getMovieByGenres(id).subscribe(res => {
          this.results = res; console.log('movie', this.results);
        });
      }else{
        this.movieService.getShowByGenres(id).subscribe(res => {
          this.results = res; console.log('shows', this.results);
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
