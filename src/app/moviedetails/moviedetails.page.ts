import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/Movie'
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {
    movie: Movie;
    similiar: Movie[];
  



  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id']
    this.movieService.getMovieDetails(id).subscribe(result => {
        this.movie = result;
    });
    this.movieService.findSimliarMovies(id).subscribe(res =>
        this.similiar = res);
  }






}
