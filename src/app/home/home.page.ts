import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private movieService: MovieService,
              private storageService: StorageService) {}

  ngOnInit(){
    if(this.storageService.length() == 0){
      displayNoRecommendations();
    }else{
      displayRecommendations();
    }
  }
  
  
}
