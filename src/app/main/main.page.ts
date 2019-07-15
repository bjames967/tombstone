import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageUnit } from './../models/StorageUnit';
import { StorageService } from './../service/storage.service';
import { Chart } from 'chart.js';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.75,
    spaceBetween: 20,
    centeredSlides: true
  };
    
  
  constructor(private storageService: StorageService,
              private loadingCtrl: LoadingController) { }
    
    displayMyActivity: boolean;
    private doughnutChart: Chart;
  
    displayMyWatchlistQueue: boolean;
    watchlistQueue: StorageUnit[];
  
    displayMyRecents: boolean;
    recentlyWatchedQueue: StorageUnit[]
  
    displayMyFavorites: boolean;
    favoritesQueue: StorageUnit[];
  
    displayRecommended: boolean;
    recommendedQueue: StorageUnit[];
    
    
    
    //issue with calling size on database
  ngOnInit() {
    this.displayMyActivity = true;
    this.displayMyWatchlistQueue = true;
    this.displayRecentlyWatchedQueue = true;
    this.loadWatchlistQueue();
    this.loadFavoritesQueue();
    this.loadRecentlyWatchedQueue();
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Movie Tombstones Collected", "TV Tombstones Collected"],
        datasets: [
          {
            label: "# of votes",
            data: [4,3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"]
          }
        ]
      }
    });
   
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
          this.watchlistQueue.unshift(list.pop());
        }
      });
  }
  
  loadFavoritesQueue(){
   this.storageService.getMovieFavorites().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.favoriteMovies.unshift(list.pop());
      }
    });
  }
    
  loadRecentlyWatchedQueue(){
   this.storageService.getMovieTombstones().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.recentlyWatchedQueue.unshift(list.pop());
      }
    });
  }
    
  loadRecommendedQueue(){
    //call engine service
  }
  

  
  
  
  
  
  
  
  

}
