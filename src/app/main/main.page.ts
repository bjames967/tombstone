import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageUnit } from './../models/StorageUnit';
import { StorageService } from './../service/storage.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  
  constructor(private storageService: StorageService) { }
    private doughnutChart: Chart;
    favoriteMovies: StorageUnit[];
    favoriteShows: StorageUnit[];
    displayFavoriteMovies: boolean;
    displayFavoriteShows: boolean;
    displayMyActivity: boolean;
    displayMyWatchlistQueue: boolean;
    
    //issue with calling size on database
  ngOnInit() {
    //check size of all 3 stored elements
   checkDataSize(); 
   loadMainPage();
  
  
  
  
  loadMainPage(){
    loadMyActivityGraphs();
      
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
    
  loadTopFavoriteMovies(){
      getFavoriteMovies();
      if(this.favoriteMovies.length === 0){
        displayFavoriteMovies = false;
      } 
  }
  
  
  checkDataSize(){
    //call size function from service
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
