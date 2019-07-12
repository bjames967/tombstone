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
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
    
  
  constructor(private storageService: StorageService,
              private loadingCtrl: LoadingController) { }
    private doughnutChart: Chart;
    watchlistQueue: StorageUnit[];
    favoriteMovies: StorageUnit[];
    favoriteShows: StorageUnit[];
    displayFavoriteMovies: boolean;
    displayFavoriteShows: boolean;
    displayMyActivity: boolean;
    displayMyWatchlistQueue: boolean;
    
    //issue with calling size on database
  ngOnInit() {
    //check size of all 3 stored elements
   this.checkDataSize(); 
   this.loadMainPage();
  }
  
  loadQueueWatchlist(){
   
    
  }
  
  loadFavoritesList(){
   //TODO check if list is empty 
  }
  
  
  
  
  loadMainPage(){
    this.presentLoading();
    this.loadMyActivityGraphs();
    this.loadQueueWatchlist();
      
  }
  
  async presentLoading(){
   let loading =  this.loadingCtrl.create({
     spinner: 'dots',
     duration: '20000'
   });
    return loading.present();
  }

  loadMyActivityGraphs(){
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
    })
  }
  
  
    
    
    
    
    
    
    
  getFavoriteMovies(){
   this.storageService.getMovieFavorites().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.favoriteMovies.unshift(list.pop());
      }
      return this.favoriteMovies;
    });
  }
  
  getFavoriteShows(){
     return this.storageService.getTvFavorites().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.favoriteShows.unshift(list.pop());
      }
    });
  }
  
  
  
  
  
  
  
  

}
