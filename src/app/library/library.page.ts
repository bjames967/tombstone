import { Component, OnInit } from '@angular/core';
import { MovieService } from './../service/movies.service';
import { StorageService }  from './../service/StorageService';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  Movie: Movie[];
  TVshow: TVshow[];
  
  
  constructor(private movieService: MovieService,
              private storageService: StorageService) { }

  ngOnInit() {
     
  }
  
  
  
  loadMoviesTab(){
      
  }
  
  loadTvTab(){
    
  }

}
