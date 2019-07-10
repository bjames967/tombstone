import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { StorageService } from '../service/storage.service';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { SortPagePage } from './../modals/sort-page/sort-page.page';

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
              private popoverCtrl: PopoverController) { }

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
//   //modal for rating the movie
//   async openModal(){
//     const modal = await this.modalCtrl.create({
//       component: UserRatingModal
//     });
//     return await modal.present();
//   }
  
//   closeModal(){
//     cosnt { data } = await modal.onWillDismiss();
//     console.log(data);
//   }
  
  collectTombstone(){
     let unit = this.storageService.mapMovieToStorageUnit(this.movie, 10);
      this.storageService.collectMovieTombstone(unit);
      
  }
  addMovieToWatchlist(){
      let unit = this.storageService.mapMovieToStorageUnit(this.movie, 10);
      this.storageService.addToMovieWatchList(unit);
      
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
  
  toggleRatingModule(){
    
  }
}
