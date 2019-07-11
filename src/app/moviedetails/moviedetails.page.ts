import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { StorageService } from '../service/storage.service';
import { PopoverController } from '@ionic/angular';
import { SortPagePage } from './../modals/sort-page/sort-page.page';
import { RatingPage } from '../modals/rating/rating.page';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

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
              private popoverCtrl: PopoverController,
              private toast: ToastController,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id']
    loadDisplay();
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
  
  loadingDisplay(){
   let load = await this.loadingCtrl.create({
      duration: 2000
   });
  }
    
  
  collectTombstone(){
      this.openRatingModal();
     let unit = this.storageService.mapMovieToStorageUnit(this.movie, 10);
      this.storageService.collectMovieTombstone(unit);
      this.toastSuccess(this.movie);
      
  }
  addMovieToWatchlist(){
      let unit = this.storageService.mapMovieToStorageUnit(this.movie, 10);
      this.storageService.addToMovieWatchList(unit);
      
  }
  async toastSuccess(unit: Movie){
    let showToast = await this.toast.create({
      message: 'success',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    return await showToast.present() 
  }

  async toastFailure(unit: Movie){
    let showToast = await this.toast.create({
      message: 'failure',
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    return await showToast.present() 
  }

  async openRatingModal(){
    let UserRatingModal = await this.popoverCtrl.create({
      component: RatingPage,
      animated: true
    });
   //get data from rating modal
    return await UserRatingModal.present();
  }

  async openSortingModal(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: SortPagePage,
      event: ev,
      translucent: true,
      showBackdrop: true,
      animated: true
    });
    return await popover.present();
  }


  async addToFavorites(){
    // const favpopover = await this.popoverCtrl.create({
    // })
  }
 
}
