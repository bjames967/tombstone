import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { StorageService } from './../service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  TvStone: StorageUnit[];
  MovieStone: StorageUnit[];
  
  constructor(private movieService: MoviesService,
              private storageService: StorageService,
              private router: Router) { }

   ngOnInit() {
   
  }
  
  loadTombstones(){
    loadTvTombstones();
    loadMovieTombstones();
  }
  
  onMovieClick(id){
    this.router.navigate(['movie', id])
  }
  
  onTvClick(id){
    this.router.navigate(['tv', id]);
  }
  
  
  loadTvTombstones(){
    this.storageService.getTvTombstones();
  }
  
  loadMovieTombstones(){
    this.storageService.getMovieTombstones();
  }
  
  removeTvTombstone(id: number){
    this.storageService.deleteMovieFromTombstones(id);
  }
  
  removeMovieTombstone(id: number){
    this.storageService.deleteTvFromTombstone(id);
  }
    
    
    
    
    
    
    
    

  

}
