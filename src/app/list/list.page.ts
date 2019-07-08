import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { Movie } from './../models/Movie';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  movieList: StorageUnit[];
  tvList: StorageUnit[];
  
  constructor(private storageservice: StorageService,
              private router: Router) {
  }
 
  ngOnInit() {
    loadWatchList();
  }
 
  onMovieClick(){
     this.router.navigate(['movie', id])
  }
  
  onTvClick(){
     this.router.navigate(['tv', id])
  }
  

  loadWatchList(){
   loadMovieWatchList();
   loadTvWatchList();
  }
  loadMovieWatchList(){
    this.movieList = this.storageService.getMovieWatchList();
  }
  
  loadTvWatchList(){
    this.tvList = this.storageService.getTvWatchList(); 
  }
  
  removeShow(id: number){
    return this.storageService.deleteTvFromWatchList(id);
  }
  
  removeMovie(id: number){
    return this.storageService.deleteMovieFromWatchList(id);
  }
  
      
}
