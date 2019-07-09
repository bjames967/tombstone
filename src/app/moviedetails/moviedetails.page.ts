import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { StorageService } from '../service/storage.service';
import { ModalController } from '@ionic/angular';



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
              private storageService: StorageService,
              private modalCtrl: ModalController) { }

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
  addMovieToWatchlist(){
      let unit = this.storageService.mapMovieToStorageUnit(this.movie);
      this.storageService.addToMovieWatchList(unit);
      console.log('added movie to watch list')
  }
  
  openModal(){
    //generate a modal page
  }
  
  closeModal(){
    //should call collectTombstone() with their rating 
  }
  
  collectTombstone(){
     let unit = this.storageService.mapMovieToStorageUnit(this.movie);
      this.storageService.collectMovieTombstone(unit);
      console.log('added movie to watch list');
  }
  
  toggleRatingModule(){
    
  }
}
