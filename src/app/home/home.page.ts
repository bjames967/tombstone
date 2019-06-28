import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Movies: Movie[];
  Shows: TVshow[];
  
  constructor(private movieService: MovieService,
              private storageService: StorageService) {}
  
  
  ngOnInit(){
    
    
    
    
    
  }
}
