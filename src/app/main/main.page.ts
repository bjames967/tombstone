import { Component, OnInit } from '@angular/core';
import { StorageUnit } from './../model/StorageUnit';
import { StorageService } from './../services/storage.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private storageService: StorageService) { }

    favoriteMovies: StorageUnit[];
    favoriteShows: StorageUnit[];
    
  
  ngOnInit() {
  }
  
  loadMainPage(){
    
  }
  getFavoriteMovies(){
    return this.storageService.getMovieFavorites().then((list: StorageUnit[]) => {
      let step;
      for(step = 0; step < 5; step++){
        this.favoriteMovies.unshift(list.pop());
      }
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
