import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { StorageService } from '../service/storage.service';
import { ModalController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

//Do these commands for Toast to work correctly
// ionic cordova plugin add cordova-plugin-x-toast
// npm install @ionic-native/toast


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
              private modalCtrl: ModalController,
              private toast: Toast) { }

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
  openModal(){
    //generate a modal page
  }
  
  closeModal(){
    //should call collectTombstone() with their rating 
  }
  
  collectTombstone(){
     let unit = this.storageService.mapMovieToStorageUnit(this.movie);
      this.storageService.collectMovieTombstone(unit);
      this.toast.show('collected tombstone for #{unit.title}');
      console.log(toast);
  }
  addMovieToWatchlist(){
      let unit = this.storageService.mapMovieToStorageUnit(this.movie);
      this.storageService.addToMovieWatchList(unit);
      this.toast.show('Added #{unit.title} to watch list');
      console.log(toast);
  }
  
  toggleRatingModule(){
    
  }
}
