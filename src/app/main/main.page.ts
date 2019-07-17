import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageUnit } from './../models/StorageUnit';
import { StorageService } from './../service/storage.service';
import * as HighCharts from 'highcharts';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

//https://www.highcharts.com/demo/network-graph
//npm install highcharts --save

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
  };

  constructor(private storageService: StorageService,
              private loadingCtrl: LoadingController,
              private router: Router) { }
    
    displayMyActivity: boolean;
  
    displayMyWatchlistQueue: boolean;
    watchlistQueue: StorageUnit[]=[];
  
    displayRecentlyWatchedQueue: boolean;
    recentlyWatchedQueue: StorageUnit[]=[];
  
    displayMyFavorites: boolean;
    favoritesQueue: StorageUnit[] = [];
  
    displayRecommended: boolean;
    recommendedQueue: StorageUnit[]=[];

    displayGenres: boolean;
    genres: {
      id: number,
      name: string
    }[];
    
    //issue with calling size on database
  ngOnInit() {


    this.displayMyActivity = true;
    this.displayMyWatchlistQueue = true;
    this.displayRecentlyWatchedQueue = true;
    this.loadWatchlistQueue();
    this.loadFavoritesQueue();
    this.loadRecentlyWatchedQueue();
  }
    
       
    
          
        
      
     

  onMovieClick(id){
    this.router.navigate(['movie', id])
 }
 
 onTvClick(id){
    this.router.navigate(['tv', id])
 }

  
  async presentLoading(){
   let loading =  await this.loadingCtrl.create({
     spinner: 'dots',
     duration: 20000
   });
    return loading.present();
  }
  
  
  loadWatchlistQueue(){
      this.storageService.getMovieWatchList().then((list: StorageUnit[]) => {
        let step;
        for(step = 0; step < 5; step++){
          this.watchlistQueue.unshift(list.shift());
        }
        console.log(this.watchlistQueue);
      });
  }
  
  loadFavoritesQueue(){
    let list = this.storageService.getMovieFavorites
   this.storageService.getMovieFavorites().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.favoritesQueue.unshift(list.shift());
      }
    });
  }
    
  loadRecentlyWatchedQueue(){
   this.storageService.getMovieTombstones().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.recentlyWatchedQueue.unshift(list.shift());
      }
    });
  }
    
  loadRecommendedQueue(){
    //call engine service
  }
  
  loadGenres(){
    //TODO load all genres into an array to output as ion tags
  }
  
  navToGenreTopTrending(){
    
  }
  

  
  
  
  
  
  
  
  

}
