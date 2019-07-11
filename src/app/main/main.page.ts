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
    
    //issue with calling size on database
  ngOnInit() {
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
  
  loadMainPage(){
    
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
